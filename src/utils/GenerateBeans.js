export default class GenerateBeans {
    static repositoryItem = (repository) => {
        return {
            id: repository.id,
            organizationName: repository.owner.login,
            repositoryName: repository.name,
            avatar: repository.owner.avatar_url
        }
    }

    static issueItem = (issue) => {
        return {
            id: issue.id,
            issueTitle: issue.title,
            issueUrl: issue.html_url,
            userName: issue.user.login,
            userAvatar: issue.user.avatar_url
        }
    }
}