/**
 * Github API implementation
 */

/**
 * Classes
 */

class GitOwner {
    /**
    * @type {string}
    */
    login;
    /**
    * @type {number}
    */
    id;
    /**
    * @type {string}
    */
    node_id;
    /**
    * @type {string}
    */
    avatar_url;
    /**
    * @type {string}
    */
    gravatar_id;
    /**
    * @type {string}
    */
    url;
    /**
    * @type {string}
    */
    html_url;
    /**
    * @type {string}
    */
    followers_url;
    /**
    * @type {string}
    */
    following_url;
    /**
    * @type {string}
    */
    gists_url;
    /**
    * @type {string}
    */
    starred_url;
    /**
    * @type {string}
    */
    subscriptions_url;
    /**
    * @type {string}
    */
    organizations_url;
    /**
    * @type {string}
    */
    repos_url;
    /**
    * @type {string}
    */
    events_url;
    /**
    * @type {string}
    */
    received_events_url;
    /**
    * @type {string}
    */
    type;
    /**
    * @type {string}
    */
    user_view_type;
    /**
    * @type {boolean}
    */
    site_admin;
}

class GitRepository {
    /**
    * @type {number}
    */
    id;
    /**
    * @type {string}
    */
    node_id;
    /**
    * @type {string}
    */
    name;
    /**
    * @type {string}
    */
    full_name;
    /**
    * @type {boolean}
    */
    private;
    /**
    * @type {GitOwner}
    */
    owner;
    /**
    * @type {string}
    */
    html_url;
    /**
    * @type {string}
    */
    description;
    /**
    * @type {boolean}
    */
    fork;
    /**
    * @type {string}
    */
    url;
    /**
    * @type {string}
    */
    forks_url;
    /**
    * @type {string}
    */
    keys_url;
    /**
    * @type {string}
    */
    collaborators_url;
    /**
    * @type {string}
    */
    teams_url;
    /**
    * @type {string}
    */
    hooks_url;
    /**
    * @type {string}
    */
    issue_events_url;
    /**
    * @type {string}
    */
    events_url;
    /**
    * @type {string}
    */
    assignees_url;
    /**
    * @type {string}
    */
    branches_url;
    /**
    * @type {string}
    */
    tags_url;
    /**
    * @type {string}
    */
    blobs_url;
    /**
    * @type {string}
    */
    git_tags_url;
    /**
    * @type {string}
    */
    git_refs_url;
    /**
    * @type {string}
    */
    trees_url;
    /**
    * @type {string}
    */
    statuses_url;
    /**
    * @type {string}
    */
    languages_url;
    /**
    * @type {string}
    */
    stargazers_url;
    /**
    * @type {string}
    */
    contributors_url;
    /**
    * @type {string}
    */
    subscribers_url;
    /**
    * @type {string}
    */
    subscription_url;
    /**
    * @type {string}
    */
    commits_url;
    /**
    * @type {string}
    */
    git_commits_url;
    /**
    * @type {string}
    */
    comments_url;
    /**
    * @type {string}
    */
    issue_comment_url;
    /**
    * @type {string}
    */
    contents_url;
    /**
    * @type {string}
    */
    compare_url;
    /**
    * @type {string}
    */
    merges_url;
    /**
    * @type {string}
    */
    archive_url;
    /**
    * @type {string}
    */
    downloads_url;
    /**
    * @type {string}
    */
    issues_url;
    /**
    * @type {string}
    */
    pulls_url;
    /**
    * @type {string}
    */
    milestones_url;
    /**
    * @type {string}
    */
    notifications_url;
    /**
    * @type {string}
    */
    labels_url;
    /**
    * @type {string}
    */
    releases_url;
    /**
    * @type {string}
    */
    deployments_url;
    /**
    * @type {string}
    */
    created_at;
    /**
    * @type {string}
    */
    updated_at;
    /**
    * @type {string}
    */
    pushed_at;
    /**
    * @type {string}
    */
    git_url;
    /**
    * @type {string}
    */
    ssh_url;
    /**
    * @type {string}
    */
    clone_url;
    /**
    * @type {string}
    */
    svn_url;
    /**
    * @type {object}
    */
    homepage;
    /**
    * @type {number}
    */
    size;
    /**
    * @type {number}
    */
    stargazers_count;
    /**
    * @type {number}
    */
    watchers_count;
    /**
    * @type {string}
    */
    language;
    /**
    * @type {boolean}
    */
    has_issues;
    /**
    * @type {boolean}
    */
    has_projects;
    /**
    * @type {boolean}
    */
    has_downloads;
    /**
    * @type {boolean}
    */
    has_wiki;
    /**
    * @type {boolean}
    */
    has_pages;
    /**
    * @type {boolean}
    */
    has_discussions;
    /**
    * @type {number}
    */
    forks_count;
    /**
    * @type {object}
    */
    mirror_url;
    /**
    * @type {boolean}
    */
    archived;
    /**
    * @type {boolean}
    */
    disabled;
    /**
    * @type {number}
    */
    open_issues_count;
    /**
    * @type {object}
    */
    license;
    /**
    * @type {boolean}
    */
    allow_forking;
    /**
    * @type {boolean}
    */
    is_template;
    /**
    * @type {boolean}
    */
    web_commit_signoff_required;
    /**
    * @type {object}
    */
    topics;
    /**
    * @type {string}
    */
    visibility;
    /**
    * @type {number}
    */
    forks;
    /**
    * @type {number}
    */
    open_issues;
    /**
    * @type {number}
    */
    watchers;
    /**
    * @type {string}
    */
    default_branch;
}

class GitRepoInfos {
    /**
    * @type {number}
    */
    id;
    /**
    * @type {string}
    */
    node_id;
    /**
    * @type {string}
    */
    name;
    /**
    * @type {string}
    */
    full_name;
    /**
    * @type {boolean}
    */
    private;
    /**
    * @type {object}
    */
    owner;
    /**
    * @type {string}
    */
    html_url;
    /**
    * @type {string}
    */
    description;
    /**
    * @type {boolean}
    */
    fork;
    /**
    * @type {string}
    */
    url;
    /**
    * @type {string}
    */
    forks_url;
    /**
    * @type {string}
    */
    keys_url;
    /**
    * @type {string}
    */
    collaborators_url;
    /**
    * @type {string}
    */
    teams_url;
    /**
    * @type {string}
    */
    hooks_url;
    /**
    * @type {string}
    */
    issue_events_url;
    /**
    * @type {string}
    */
    events_url;
    /**
    * @type {string}
    */
    assignees_url;
    /**
    * @type {string}
    */
    branches_url;
    /**
    * @type {string}
    */
    tags_url;
    /**
    * @type {string}
    */
    blobs_url;
    /**
    * @type {string}
    */
    git_tags_url;
    /**
    * @type {string}
    */
    git_refs_url;
    /**
    * @type {string}
    */
    trees_url;
    /**
    * @type {string}
    */
    statuses_url;
    /**
    * @type {string}
    */
    languages_url;
    /**
    * @type {string}
    */
    stargazers_url;
    /**
    * @type {string}
    */
    contributors_url;
    /**
    * @type {string}
    */
    subscribers_url;
    /**
    * @type {string}
    */
    subscription_url;
    /**
    * @type {string}
    */
    commits_url;
    /**
    * @type {string}
    */
    git_commits_url;
    /**
    * @type {string}
    */
    comments_url;
    /**
    * @type {string}
    */
    issue_comment_url;
    /**
    * @type {string}
    */
    contents_url;
    /**
    * @type {string}
    */
    compare_url;
    /**
    * @type {string}
    */
    merges_url;
    /**
    * @type {string}
    */
    archive_url;
    /**
    * @type {string}
    */
    downloads_url;
    /**
    * @type {string}
    */
    issues_url;
    /**
    * @type {string}
    */
    pulls_url;
    /**
    * @type {string}
    */
    milestones_url;
    /**
    * @type {string}
    */
    notifications_url;
    /**
    * @type {string}
    */
    labels_url;
    /**
    * @type {string}
    */
    releases_url;
    /**
    * @type {string}
    */
    deployments_url;
    /**
    * @type {string}
    */
    created_at;
    /**
    * @type {string}
    */
    updated_at;
    /**
    * @type {string}
    */
    pushed_at;
    /**
    * @type {string}
    */
    git_url;
    /**
    * @type {string}
    */
    ssh_url;
    /**
    * @type {string}
    */
    clone_url;
    /**
    * @type {string}
    */
    svn_url;
    /**
    * @type {object}
    */
    homepage;
    /**
    * @type {number}
    */
    size;
    /**
    * @type {number}
    */
    stargazers_count;
    /**
    * @type {number}
    */
    watchers_count;
    /**
    * @type {string}
    */
    language;
    /**
    * @type {boolean}
    */
    has_issues;
    /**
    * @type {boolean}
    */
    has_projects;
    /**
    * @type {boolean}
    */
    has_downloads;
    /**
    * @type {boolean}
    */
    has_wiki;
    /**
    * @type {boolean}
    */
    has_pages;
    /**
    * @type {boolean}
    */
    has_discussions;
    /**
    * @type {number}
    */
    forks_count;
    /**
    * @type {object}
    */
    mirror_url;
    /**
    * @type {boolean}
    */
    archived;
    /**
    * @type {boolean}
    */
    disabled;
    /**
    * @type {number}
    */
    open_issues_count;
    /**
    * @type {object}
    */
    license;
    /**
    * @type {boolean}
    */
    allow_forking;
    /**
    * @type {boolean}
    */
    is_template;
    /**
    * @type {boolean}
    */
    web_commit_signoff_required;
    /**
    * @type {object}
    */
    topics;
    /**
    * @type {string}
    */
    visibility;
    /**
    * @type {number}
    */
    forks;
    /**
    * @type {number}
    */
    open_issues;
    /**
    * @type {number}
    */
    watchers;
    /**
    * @type {string}
    */
    default_branch;
    /**
    * @type {object}
    */
    temp_clone_token;
    /**
    * @type {number}
    */
    network_count;
    /**
    * @type {number}
    */
    subscribers_count;
}

let interruptGithubLoading = false;

/**
 * @param {String} username 
 * @returns {Promise<[GitRepository]>}
 */
async function getGitRepositories(username) {
    return await (await fetch(`https://api.github.com/users/${username}/repos`)).json();
}

/**
 * @param {String} lang
 * @returns {HTMLElement}
 */
function getIconByLanguage(lang) {
    let element = document.createElement('i');

    switch (lang.toLowerCase()) {
        case 'css':
            element.classList.add('fa-brands', 'fa-css3');
            break;
        case 'html':
            element.classList.add('fab', 'fa-html5');
            break;
        case 'python':
            element.classList.add('fab', 'fa-python');
            break;
        default:
            element.classList.add('fa-brands', `fa-${lang.toLowerCase()}`);
            break;
    }

    return element;
}

/**
 * @param {GitRepository} repo 
 * @returns {Promise<HTMLDivElement>}
 */
async function buildRepositoryElement(repo) {
    try {
        if (interruptGithubLoading) return;

        let element = document.createElement('div');
        element.classList.add('githubcard');
        element.addEventListener('click', function () {
            window.open(`https://github.com/${repo.full_name}`, '_blank');
        });

        let arrowicon = document.createElement('i');
        arrowicon.classList.add('fa-solid', 'fa-arrow-up-right-from-square');
        element.appendChild(arrowicon);

        let title = document.createElement('h1');
        title.classList.add('githubtitle');
        title.innerText = repo.name;
        element.appendChild(title);

        let description = document.createElement('a');
        description.classList.add('githubdesc');
        description.innerText = repo.description;
        element.appendChild(description);

        if (repo.language) {
            let language = document.createElement('a');
            language.classList.add('githublang');
            language.appendChild(getIconByLanguage(repo.language));
            language.innerHTML += ` ${repo.language}`;
            element.appendChild(language);
        }

        /**
         * @type {GitRepoInfos}
         */
        let infos = await (await fetch(`https://api.github.com/repos/${repo.full_name}`)).json();

        let stats = document.createElement('div');
        stats.classList.add('stats');

        let stars = document.createElement('a');
        stars.classList.add('githubstars');
        let staricon = document.createElement('i');
        staricon.classList.add('fa-solid', 'fa-star');
        stars.appendChild(staricon);
        stars.innerHTML += ` ${infos.stargazers_count}`;

        let forks = document.createElement('a');
        forks.classList.add('githubforks');
        let forkicon = document.createElement('i');
        forkicon.classList.add('fa-solid', 'fa-code-fork');
        forks.appendChild(forkicon);
        forks.innerHTML += ` ${infos.forks || 0}`;

        let tags = document.createElement('a');
        tags.classList.add('githubtags');
        let tagicon = document.createElement('i');
        tagicon.classList.add('fa-solid', 'fa-tag');
        tags.appendChild(tagicon);
        let t = await (await fetch(infos.tags_url)).json();
        tags.innerHTML += ` ${t.length}`;

        let branches = document.createElement('a');
        branches.classList.add('githubbranches');
        let branchicon = document.createElement('i');
        branchicon.classList.add('fas', 'fa-code-branch');
        branches.appendChild(branchicon);
        branches.innerHTML += ` 0`; // TODO: get branches

        stats.appendChild(stars);
        stats.appendChild(forks);
        stats.appendChild(tags);
        stats.appendChild(branches);
        element.appendChild(stats);

        return element;
    } catch (e) {
        interruptGithubLoading = true;
        console.error(e);
    }
}

(async function () {
    return;
    let page = document.querySelector('div.page6');
    let list = page.querySelector('ul');

    try {
        let repos = await getGitRepositories('Fraancescoo');
        if (repos && !Object.keys(repos).includes('message')) {
            await repos.filter(repo => repo.description !== 'fp-ignore').map(buildRepositoryElement).forEach(function (elem) {
                if(!elem) interruptGithubLoading = true;
                if (interruptGithubLoading) return;
    
                console.log(elem);
                let li = document.createElement('li');
                li.appendChild(elem);
                list.appendChild(li);
            });
        }else throw new Error();
    }catch(e) {
        interruptGithubLoading = true;
    }

    page.classList.remove('loading');
    if (interruptGithubLoading) page.classList.add('error');
})();