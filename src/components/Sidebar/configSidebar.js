import icons from '~/assets/icons';

const list = [
    { icon: icons.regular.home, activeIcon: icons.solid.home, name: 'Home', group: 1, path: '/' },
    { icon: icons.regular.search, activeIcon: icons.solid.search, name: 'Search', group: 1, path: '/search' },
    {
        icon: icons.regular.library,
        activeIcon: icons.solid.library,
        name: 'Your Library',
        group: 1,
        path: '/collection/playlists',
    },
    { icon: icons.regular.plus, name: 'Create PLaylist', group: 2, path: '/' },
    { icon: icons.regular.heart, name: 'Liked Songs', group: 2, path: '/collection/tracks' },
];

export default list;
