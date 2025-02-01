import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const bucketName = "my-bucket";

const bucket = new aws.s3.Bucket(bucketName);

export const bucketNameOutput = bucket.id;
export const bucketArnOutput = bucket.arn;