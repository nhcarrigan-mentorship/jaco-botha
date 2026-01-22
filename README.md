Site Stages:


favicon.ico (svg)       > /app
icon.ico (32png)        > /app
apple-icon.ico (180png) > /app
background.svg          > public
logo.svg                > public
logosm.svg              > public

SITE_MAP_URL            > .env
Font                    > layout.tsx
SEO                     > layout.tsx
background              > layout <body>
logo                    > layout <Navigation>
logosm                  > layout <footer>

Typography Hierarchy    > globals.css
Navigation / Interact   > globals.css

Debug & Build: 1.0.0-alpha+001

Hero-1920-1080.webp < 300KB     > public
Video-hero-1080-720.mp4 < 5MiB  > public
icon/graph32.svg                > public
service/product-800xwebp        > public
headshot-400.webp               > public

Hero                            > page.tsx
Icons                           > ...
Services                        > /services/page.tsx
Headshots                       > /about/page.tsx
ContactInfo                     > layout <footer>
Copyright                       > layout <footer>

ResponsiveH: 360-384-414, 800, 1366
ResponsiveV: 832        , 600, 768

Debug & Build: 1.0.0-beta+001

Form Styling        > globals.css

icon512.ico (png)   > /app
placeholder-X.svg   > public
video.mp4/.webm     > public

Form handing        > /contact etc.
Terms & conditions  > layout <footer>
Trust Badges        > layout <top&bottom>
User Auth           > /signin
User Dashboard      > /dashboard
Accessibility       > ...
Blog                > /blog

Performance Optimizations Assets

ResponsiveH: 1920, 1536
ResponsiveV: 1080, 864

Debug & Build: 1.0.0+001

Implement next-themes   > ...
ThemeSwitch             > layout <Navigation>
Implement Multi-Lanuage > ...
Pricing/Plans           > /services/page.tsx
Careers/Culture         > /about/page.tsx
Cart                    > /cart/ <Navigation>
Signup                  > /signup <Navigation>
AI Chat                 > Headless on top
Search                  > layout <Navigation>
Individual Service      > /services/...
0Auth                   > ...
Security Audit          > ...
Sentry                  > ...
Analitics               > ...

Debug & Build: 2.0.0+001



