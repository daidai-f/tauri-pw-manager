const isProd = process.env.NODE_ENV === "production";

import { NextConfig } from "next";

export default async (
  phase: string,
  { defaultConfig }: { defaultConfig: NextConfig }
): Promise<NextConfig> => {
  const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    assetPrefix: isProd ? undefined : `http://localhost:3000`,
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      });
      return config;
    },
    async headers() {
      return [
        {
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
          ],
        },
      ];
    },
  };

  return nextConfig;
};
