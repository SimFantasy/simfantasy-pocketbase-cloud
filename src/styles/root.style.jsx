import { Global, css } from '@emotion/react'
import s from '@/styles/global.style'

const RootStyles = () => {
  return (
    <Global
      styles={css`
        :root[data-color-mode='light'] {
          --sim-title: #262626;
          --sim-text: #595959;
          --sim-text-secondary: #8c8c8c;
          --sim-text-disabled: #bfbfbf;

          --sim-bg: #ffffff;
          --sim-bg-secondary: #f5f5f5;
          --sim-bg-tertiary: #fbfbfb;
          --sim-button: #141414;
          --sim-button-secondary: #f2f2f2;

          --sim-dark: #030303;
          --sim-light: #ffffff;

          --sim-border: #bfbfbf;
          --sim-divider: #d9d9d9;
          --sim-line: #f0f0f0;

          --sim-icon: #bfbfbf;
          --sim-shadow: 0px 5px 10px rgb(0 0 0 / 5%);

          --sim-gray: #adb5bd;
          --sim-gray-0: #edf7fc;
          --sim-gray-1: #e1eaf0;
          --sim-gray-2: #d5dee3;
          --sim-gray-3: #c9d1d6;
          --sim-gray-4: #bdc4c9;
          --sim-gray-5: #adb5bd;
          --sim-gray-6: #838c96;
          --sim-gray-7: #5c6570;
          --sim-gray-8: #39404a;
          --sim-gray-9: #1b1e24;

          --sim-red: #ff6b6b;
          --sim-red-0: #fff2f0;
          --sim-red-1: #fff2f0;
          --sim-red-2: #ffe8e6;
          --sim-red-3: #ffc1bd;
          --sim-red-4: #ff9794;
          --sim-red-5: #ff6b6b;
          --sim-red-6: #d95055;
          --sim-red-7: #b33941;
          --sim-red-8: #8c2630;
          --sim-red-9: #661b25;

          --sim-pink: #f06595;
          --sim-pink-0: #fff0f3;
          --sim-pink-1: #fff0f3;
          --sim-pink-2: #ffe6ec;
          --sim-pink-3: #ffbdcf;
          --sim-pink-4: #fc92b4;
          --sim-pink-5: #f06595;
          --sim-pink-6: #c94b7b;
          --sim-pink-7: #a33462;
          --sim-pink-8: #7d224b;
          --sim-pink-9: #571736;

          --sim-grape: #cc5de8;
          --sim-grape-0: #fef0ff;
          --sim-grape-1: #fef0ff;
          --sim-grape-2: #fce0ff;
          --sim-grape-3: #f5b8ff;
          --sim-grape-4: #e389f5;
          --sim-grape-5: #cc5de8;
          --sim-grape-6: #a444c2;
          --sim-grape-7: #7f2f9c;
          --sim-grape-8: #5b1d75;
          --sim-grape-9: #3b134f;

          --sim-violet: #845ef7;
          --sim-violet-0: #f6f0ff;
          --sim-violet-1: #f6f0ff;
          --sim-violet-2: #e8dbff;
          --sim-violet-3: #cbb3ff;
          --sim-violet-4: #ab8aff;
          --sim-violet-5: #845ef7;
          --sim-violet-6: #6345d1;
          --sim-violet-7: #4630ab;
          --sim-violet-8: #2e1e85;
          --sim-violet-9: #1d155e;

          --sim-indigo: #5c7cfa;
          --sim-indigo-0: #f0f5ff;
          --sim-indigo-1: #f0f5ff;
          --sim-indigo-2: #d9e4ff;
          --sim-indigo-3: #b0c5ff;
          --sim-indigo-4: #87a3ff;
          --sim-indigo-5: #5c7cfa;
          --sim-indigo-6: #445cd4;
          --sim-indigo-7: #2f40ad;
          --sim-indigo-8: #1e2887;
          --sim-indigo-9: #141961;

          --sim-blue: #339af0;
          --sim-blue-0: #f0fbff;
          --sim-blue-1: #d9f3ff;
          --sim-blue-2: #b0e3ff;
          --sim-blue-3: #87d1ff;
          --sim-blue-4: #5dbafc;
          --sim-blue-5: #339af0;
          --sim-blue-6: #2078c9;
          --sim-blue-7: #1258a3;
          --sim-blue-8: #073c7d;
          --sim-blue-9: #042757;

          --sim-cyan: #22b8cf;
          --sim-cyan-0: #f0fffe;
          --sim-cyan-1: #ccffff;
          --sim-cyan-2: #9df2f5;
          --sim-cyan-3: #6fe0e8;
          --sim-cyan-4: #46ccdb;
          --sim-cyan-5: #22b8cf;
          --sim-cyan-6: #138fa8;
          --sim-cyan-7: #086a82;
          --sim-cyan-8: #01475c;
          --sim-cyan-9: #002736;

          --sim-teal: #22b8cf;
          --sim-teal-0: #f0fffe;
          --sim-teal-1: #ccffff;
          --sim-teal-2: #9df2f5;
          --sim-teal-3: #6fe0e8;
          --sim-teal-4: #46ccdb;
          --sim-teal-5: #22b8cf;
          --sim-teal-6: #138fa8;
          --sim-teal-7: #086a82;
          --sim-teal-8: #01475c;
          --sim-teal-9: #002736;

          --sim-green: #51cf66;
          --sim-green-0: #f0fff0;
          --sim-green-1: #f0fff0;
          --sim-green-2: #d5f5d7;
          --sim-green-3: #a5e8ac;
          --sim-green-4: #79db86;
          --sim-green-5: #51cf66;
          --sim-green-6: #39a84f;
          --sim-green-7: #26823b;
          --sim-green-8: #165c29;
          --sim-green-9: #0c3619;

          --sim-lime: #94d82d;
          --sim-lime-0: #fbfff0;
          --sim-lime-1: #f5ffd9;
          --sim-lime-2: #e7ffb0;
          --sim-lime-3: #ccf280;
          --sim-lime-4: #b0e655;
          --sim-lime-5: #94d82d;
          --sim-lime-6: #72b31d;
          --sim-lime-7: #528c0f;
          --sim-lime-8: #366606;
          --sim-lime-9: #1f4003;

          --sim-yellow: #fab005;
          --sim-yellow-0: #fffce6;
          --sim-yellow-1: #fff1a8;
          --sim-yellow-2: #ffe680;
          --sim-yellow-3: #ffd857;
          --sim-yellow-4: #ffc72e;
          --sim-yellow-5: #fab005;
          --sim-yellow-6: #d48d00;
          --sim-yellow-7: #ad6e00;
          --sim-yellow-8: #875100;
          --sim-yellow-9: #613700;

          --sim-orange: #ff922b;
          --sim-orange-0: #fffaf0;
          --sim-orange-1: #ffeccf;
          --sim-orange-2: #ffdaa6;
          --sim-orange-3: #ffc47d;
          --sim-orange-4: #ffac54;
          --sim-orange-5: #ff922b;
          --sim-orange-6: #d9701a;
          --sim-orange-7: #b3520c;
          --sim-orange-8: #8c3703;
          --sim-orange-9: #662401;
        }

        :root[data-color-mode='dark'] {
          --sim-title: #ffffff;
          --sim-text: #dbdbdb;
          --sim-text-secondary: #7a7a7a;
          --sim-text-disabled: #4a4a4a;

          --sim-bg: #1f1f1f;
          --sim-bg-secondary: #2d2d2d;
          --sim-bg-tertiary: #393939;
          --sim-button: #f4f4f4;
          --sim-button-secondary: #2d2d2d;

          --sim-dark: #ffffff;
          --sim-light: #030303;

          --sim-border: #4a4a4a;
          --sim-divider: #383838;
          --sim-line: #292929;

          --sim-icon: #4a4a4a;
          --sim-shadow: none;

          --sim-gray: #adb5bd;
          --sim-gray-0: #1f2022;
          --sim-gray-1: #303235;
          --sim-gray-2: #424447;
          --sim-gray-3: #595c60;
          --sim-gray-4: #777d82;
          --sim-gray-5: #969da4;
          --sim-gray-6: #acb2b7;
          --sim-gray-7: #c0c8cc;
          --sim-gray-8: #cfd8dd;
          --sim-gray-9: #dde6ec;

          --sim-red: #ff6b6b;
          --sim-red-0: #2c1a1b;
          --sim-red-1: #452324;
          --sim-red-2: #5b2e2e;
          --sim-red-3: #7e3b3b;
          --sim-red-4: #ad4d4d;
          --sim-red-5: #dc5e5e;
          --sim-red-6: #e88a87;
          --sim-red-7: #f3b8b5;
          --sim-red-8: #f8e2e0;
          --sim-red-9: #faeeec;

          --sim-pink: #f06595;
          --sim-pink-0: #291920;
          --sim-pink-1: #41222e;
          --sim-pink-2: #562c3b;
          --sim-pink-3: #77384e;
          --sim-pink-4: #a34968;
          --sim-pink-5: #cf5982;
          --sim-pink-6: #e585a4;
          --sim-pink-7: #f3b5c6;
          --sim-pink-8: #f8e0e6;
          --sim-pink-9: #faecef;

          --sim-grape: #cc5de8;
          --sim-grape-0: #241828;
          --sim-grape-1: #382040;
          --sim-grape-2: #4b2a54;
          --sim-grape-3: #673573;
          --sim-grape-4: #8c439e;
          --sim-grape-5: #b052c8;
          --sim-grape-6: #ce7ddf;
          --sim-grape-7: #eab0f3;
          --sim-grape-8: #f5daf8;
          --sim-grape-9: #f9ecfa;

          --sim-violet: #845ef7;
          --sim-violet-0: #1c182b;
          --sim-violet-1: #282043;
          --sim-violet-2: #362a58;
          --sim-violet-3: #46357a;
          --sim-violet-4: #5d44a8;
          --sim-violet-5: #7353d5;
          --sim-violet-6: #9c7ee8;
          --sim-violet-7: #c2abf3;
          --sim-violet-8: #e2d5f8;
          --sim-violet-9: #f1ecfa;

          --sim-indigo: #5c7cfa;
          --sim-indigo-0: #181b2b;
          --sim-indigo-1: #202644;
          --sim-indigo-2: #2a3359;
          --sim-indigo-3: #34437c;
          --sim-indigo-4: #4358aa;
          --sim-indigo-5: #516cd8;
          --sim-indigo-6: #7c95e8;
          --sim-indigo-7: #a8bcf3;
          --sim-indigo-8: #d3def8;
          --sim-indigo-9: #ecf1fa;

          --sim-blue: #339af0;
          --sim-blue-0: #141e29;
          --sim-blue-1: #172d41;
          --sim-blue-2: #1d3c56;
          --sim-blue-3: #225077;
          --sim-blue-4: #286ba3;
          --sim-blue-5: #2e86cf;
          --sim-blue-6: #56a9e5;
          --sim-blue-7: #81c8f3;
          --sim-blue-8: #abddf8;
          --sim-blue-9: #d5effa;

          --sim-cyan: #22b8cf;
          --sim-cyan-0: #122125;
          --sim-cyan-1: #143339;
          --sim-cyan-2: #18454c;
          --sim-cyan-3: #1a5e68;
          --sim-cyan-4: #1d7f8e;
          --sim-cyan-5: #209fb3;
          --sim-cyan-6: #41bac7;
          --sim-cyan-7: #6ad6dd;
          --sim-cyan-8: #99ebee;
          --sim-cyan-9: #c8fafa;

          --sim-teal: #22b8cf;
          --sim-teal-0: #122125;
          --sim-teal-1: #143339;
          --sim-teal-2: #18454c;
          --sim-teal-3: #1a5e68;
          --sim-teal-4: #1d7f8e;
          --sim-teal-5: #209fb3;
          --sim-teal-6: #41bac7;
          --sim-teal-7: #6ad6dd;
          --sim-teal-8: #99ebee;
          --sim-teal-9: #c8fafa;

          --sim-green: #51cf66;
          --sim-green-0: #17251a;
          --sim-green-1: #1d3923;
          --sim-green-2: #264c2d;
          --sim-green-3: #2f6839;
          --sim-green-4: #3c8e49;
          --sim-green-5: #48b35a;
          --sim-green-6: #6fc77b;
          --sim-green-7: #9edda4;
          --sim-green-8: #cfeed1;
          --sim-green-9: #ecfaec;

          --sim-lime: #94d82d;
          --sim-lime-0: #1d2613;
          --sim-lime-1: #2c3c16;
          --sim-lime-2: #3a4f1c;
          --sim-lime-3: #4e6c1f;
          --sim-lime-4: #679324;
          --sim-lime-5: #81bb29;
          --sim-lime-6: #a0d14f;
          --sim-lime-7: #c3e77b;
          --sim-lime-8: #e1f8ab;
          --sim-lime-9: #f1fad5;

          --sim-yellow: #fab005;
          --sim-yellow-0: #2b2211;
          --sim-yellow-1: #44320f;
          --sim-yellow-2: #594310;
          --sim-yellow-3: #7c5a0d;
          --sim-yellow-4: #aa790a;
          --sim-yellow-5: #d89907;
          --sim-yellow-6: #e8b52b;
          --sim-yellow-7: #f3ce54;
          --sim-yellow-8: #f8e07d;
          --sim-yellow-9: #faeda5;

          --sim-orange: #ff922b;
          --sim-orange-0: #2c1d13;
          --sim-orange-1: #452b16;
          --sim-orange-2: #5b3a1b;
          --sim-orange-3: #7e4d1e;
          --sim-orange-4: #ad6623;
          --sim-orange-5: #dc7f28;
          --sim-orange-6: #e89d4e;
          --sim-orange-7: #f3bb78;
          --sim-orange-8: #f8d4a2;
          --sim-orange-9: #fae8cb;
        }

        :root {
          --sim-radius-xs: 4px;
          --sim-radius-sm: 6px;
          --sim-radius: 6px;
          --sim-radius-md: 8px;
          --sim-radius-lg: 12px;
          --sim-radius-xl: 16px;
          --sim-radius-2xl: 24px;
          --sim-radius-full: 100px;
          --sim-rounded: 50%;

          --sim-space-2xs: 4px;
          --sim-space-xs: 8px;
          --sim-space-sm: 16px;
          --sim-space-md: 24px;
          --sim-space-lg: 32px;
          --sim-space-xl: 48px;
          --sim-space-2xl: 56px;
          --sim-space-3xl: 64px;
          --sim-space-4xl: 72px;
          --sim-space-5xl: 80px;

          --sim-text-xs: 12px;
          --sim-text-sm: 14px;
          --sim-text-md: 16px;
          --sim-text-lg: 18px;
          --sim-text-xl: 20px;
          --sim-text-2xl: 24px;
          --sim-text-3xl: 28px;
          --sim-text-4xl: 32px;

          --sim-font-family: 'Montserrat, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
          --sim-header-height: 56px;
          --sim-footer-height: 56px;
          --sim-sidebar-width: 200px;
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        ${s.mediaQuery({
          fontSize: ['100%', '87.5%', '62.5%']
        })}

        body {
          font-family: var(--sim-font-family);
          font-weight: 400;
          line-height: 1.5;

          background-color: var(--sim-bg-secondary);
          color: var(--sim-text);
        }

        a {
          text-decoration: none;
          color: var(--sim-lightblue-5);

          &:hover {
            color: var(--sim-lightblue-4);
          }
        }

        button,
        input {
          outline: 0;
        }

        ul {
          list-style-type: none;
        }

        img {
          max-width: 100%;
        }

        iframe {
          border: 0;
        }

        .container {
          margin: 0 auto;
          ${s.mediaQuery({
            width: s['page-width']
          })}
        }

        .page-block {
          margin-bottom: var(--sim-space-2xl);
        }

        .divider-full {
          margin: var(--sim-space-md) auto;
          width: 100%;
          height: 1px;
          border-bottom: 1px solid var(--sim-divider);
        }

        .divider {
          margin: var(--sim-space-xl) auto;
          width: 40%;
          height: 2px;
          background-color: var(--sim-divider);
          border-radius: var(--sim-radius-full);
        }

        .wmde-markdown {
          background-color: var(--sim-bg-secondary);
          color: var(--sim-text);

          pre {
            background-color: var(--sim-bg);
          }
        }
      `}
    />
  )
}

export default RootStyles
