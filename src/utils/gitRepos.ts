const TOKEN = import.meta.env.PUBLIC_GITHUB_TOKEN;
const USERNAME = "MelonConYogurt";
const HEADERS = {
  Authorization: `token ${TOKEN}`,
  Accept: "application/vnd.github.v3+json",
};
const repos_url = `https://api.github.com/users/${USERNAME}/events?per_page=100`;

async function FetchRepos() {
  try {
    const response = await fetch(repos_url, {
      method: "GET",
      headers: HEADERS,
    });
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Failed to fetch repos: ${response.status}`);
    }
  } catch (error) {
    return null;
  }
}

export default FetchRepos;
