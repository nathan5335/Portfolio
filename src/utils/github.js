/**
 * GitHub Integration Utility
 * Fetches public repositories and project data from GitHub
 */

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = 'nathan5335';

/**
 * Fetch user's public repositories
 * @param {number} per_page - Number of repos to fetch (default: 10)
 * @returns {Promise<Array>} Array of repository objects
 */
export const fetchGitHubRepos = async (per_page = 10) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&order=desc&per_page=${per_page}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const repos = await response.json();

    // Transform repos to match our project structure
    return repos.map((repo) => ({
      id: repo.id,
      title: repo.name,
      shortDesc: repo.description || 'A GitHub project',
      description: repo.description || 'Check out this project on GitHub',
      tech: repo.topics || [],
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
      lastUpdated: new Date(repo.updated_at).toLocaleDateString(),
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

/**
 * Fetch GitHub user information
 * @returns {Promise<Object>} User profile information
 */
export const fetchGitHubUserInfo = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    const userInfo = await response.json();

    return {
      username: userInfo.login,
      name: userInfo.name,
      bio: userInfo.bio,
      location: userInfo.location,
      avatarUrl: userInfo.avatar_url,
      profileUrl: userInfo.html_url,
      publicRepos: userInfo.public_repos,
      followers: userInfo.followers,
      following: userInfo.following,
      publicGists: userInfo.public_gists,
    };
  } catch (error) {
    console.error('Error fetching GitHub user info:', error);
    return null;
  }
};

/**
 * Fetch specific repository details
 * @param {string} repoName - Repository name
 * @returns {Promise<Object>} Repository details
 */
export const fetchGitHubRepoDetails = async (repoName) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch repository details');
    }

    const repo = await response.json();

    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      watchers: repo.watchers_count,
      openIssues: repo.open_issues_count,
      language: repo.language,
      topics: repo.topics,
      lastUpdated: new Date(repo.updated_at).toLocaleDateString(),
      createdAt: new Date(repo.created_at).toLocaleDateString(),
      readmeUrl: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/main/README.md`,
    };
  } catch (error) {
    console.error('Error fetching repository details:', error);
    return null;
  }
};

/**
 * Get GitHub profile statistics
 * @returns {Promise<Object>} Statistics object
 */
export const fetchGitHubStats = async () => {
  try {
    const userInfo = await fetchGitHubUserInfo();
    const repos = await fetchGitHubRepos(100);

    if (!userInfo) {
      throw new Error('Could not fetch user info');
    }

    const languages = {};
    repos.forEach((repo) => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

    const topLanguages = Object.entries(languages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([lang]) => lang);

    return {
      totalRepos: userInfo.publicRepos,
      followers: userInfo.followers,
      following: userInfo.following,
      topLanguages,
      stars: repos.reduce((sum, repo) => sum + repo.stars, 0),
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
};

export default {
  fetchGitHubRepos,
  fetchGitHubUserInfo,
  fetchGitHubRepoDetails,
  fetchGitHubStats,
};
