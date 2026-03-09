/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docsSidebar: [
        'introduction',
        {
            type: 'category',
            label: 'Installation',
            link: {
                type: 'generated-index',
            },
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    id: 'installation/base_requirements',
                    label: 'Base requirements'
                },
                {
                    type: 'doc',
                    id: 'installation/cv_cache',
                    lavel: 'Comic Vine Cache'
                },
                {
                    type: 'category',
                    label: 'Official methods',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        'installation/docker',
                        {
                            type: 'category',
                            label: 'Github / Source',
                            link: {
                                type: 'generated-index'
                            },
                            items: [
                                'installation/source',
                                'installation/running'
                            ]
                        }
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Guides',
            collapsed: true,
            link: {
                type: 'generated-index',
            },
            items: [
                'guides/carepackage',
                'guides/debug_logging',
                'guides/auto_backups',
                'guides/download_options',
                'guides/cdh_comicrn',
                'guides/formats',
                'guides/locmove',
                'guides/windows_service',
            ],
        },
        'contributing',
        'community',
        'faq',
    ],
    api: [
        {
            type: 'category',
            label: 'API',
            link: {
                type: 'doc',
                id: 'api/endpoints',
            },
            items: [
                'api/depreciated',
            ],
        },
    ],
}
module.exports = sidebars;
