import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

export default defineConfig({
  themeConfig: {
    name: 'blog',
    logo: '/logo.jpg',
    ...defineThemeConfig({
      keywords: ['blog', 'dumi', 'react', 'typescript'],
      helmetIcon: '🍺',
      settingPanelVisible:true,
      social: {
        github: {
          name: 'dumi-theme-chakra',
          link: 'https://github.com/liuhui1999'
        },
        discord: {
          name: 'maryoku-ui-discord',
          link: 'https://discord.gg/vFU6mPRr'
        }
      },
      search: {
        type: 'cmdk',
        // config: {
        //   appId: '3Q70WC0ZDM',
        //   apiKey: '8963f2300dbf226c0206ea4df0d4875f',
        //   indexName: 'DumiPages'
        // }
      },
      hero: {
        showVersionBadge: true
      },
    }),
  },
});
