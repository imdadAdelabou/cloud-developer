export const config = {
  dev: {
    username: "udagramimdaddev",
    password: "udagramimdaddev",
    database: "udagramimdaddev",
    host: "udagramimdaddev.ctrp9w1qnsju.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-2",
    aws_profile: "default",
    aws_media_bucket: "udagram-ruttner-dev",
  },
  jwt: {
    secret: " ",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
