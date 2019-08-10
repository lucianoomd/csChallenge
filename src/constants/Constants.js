export default class Constants {
  static colors = {
    BLACK: '#333',
    WHITE: '#fff',
    GRAY: '#777',
    LIGHT_GRAY: '#C9C9C9',
    SUPER_LIGHT_GRAY: '#eee',
    RED: '#d9534f'
  };

  static api = {
    PATH: 'https://api.github.com',
    GET_REPOSITORY: '/repos/',
    GET_ISSUES: '/issues',
    GET_OPEN_ISSUES: '/issues?state=open',
    GET_CLOSED_ISSUES: '/issues?state=closed'
  }

  static issueFilters = {
    ALL: 'Todas',
    OPEN: 'Abertas',
    CLOSED: 'Fechadas'
  }

  static asyncStorage = {
    REPOSITORIES: 'repositories'
  }
}
