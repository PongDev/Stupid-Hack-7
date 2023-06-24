/* eslint turbo/no-undeclared-env-vars: 0 */

export type BackendConfig = {
  port: number;
  //   bcrypt: {
  //     salt: number;
  //   };
  jwt: {
    accessToken: {
      secret: string;
      expire: number;
    };
    refreshToken: {
      secret: string;
      expire: number;
    };
  };
  swagger: {
    enable: boolean;
    prefixPath: string;
  };
  graphql: {
    debug: boolean;
    playground: boolean;
    autoSchemaFile: string | boolean;
    sortSchema: boolean;
    path: string;
  };
};

export const loadBackendConfig = (): BackendConfig => {
  let autoSchemaFile: string | boolean;
  let graphqlPath: string;

  if (
    process.env.BACKEND_GRAPHQL_AUTO_SCHEMA_FILE !== undefined &&
    ["true", ""].includes(process.env.BACKEND_GRAPHQL_AUTO_SCHEMA_FILE.trim())
  ) {
    autoSchemaFile = true;
  } else {
    autoSchemaFile = process.env.BACKEND_GRAPHQL_AUTO_SCHEMA_FILE ?? true;
  }

  if (
    process.env.BACKEND_GRAPHQL_PATH &&
    process.env.BACKEND_GRAPHQL_PATH.trim() !== ""
  ) {
    graphqlPath = process.env.BACKEND_GRAPHQL_PATH;
  } else {
    graphqlPath = "graphql";
  }

  return {
    port: parseInt(process.env.BACKEND_PORT ?? "", 10) || 3000,
    swagger: {
      enable: process.env.BACKEND_SWAGGER_ENABLE === "true",
      prefixPath: process.env.BACKEND_SWAGGER_PREFIX_PATH ?? "api",
    },
    jwt: {
      accessToken: {
        secret: process.env.BACKEND_JWT_ACCESS_TOKEN_SECRET ?? "",
        expire:
          parseInt(process.env.BACKEND_JWT_ACCESS_TOKEN_EXPIRE ?? "", 10) ||
          900,
      },
      refreshToken: {
        secret: process.env.BACKEND_JWT_REFRESH_TOKEN_SECRET ?? "",
        expire:
          parseInt(process.env.BACKEND_JWT_REFRESH_TOKEN_EXPIRE ?? "", 10) ||
          604800,
      },
    },
    graphql: {
      debug: process.env.BACKEND_GRAPHQL_DEBUG === "true",
      playground: process.env.BACKEND_GRAPHQL_PLAYGROUND_ENABLE === "true",
      autoSchemaFile,
      sortSchema: process.env.BACKEND_GRAPHQL_SORT_SCHEMA === "true",
      path: graphqlPath,
    },
  };
};
