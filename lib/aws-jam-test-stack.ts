import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { VSCodeIde, VSCodeIdeProps } from '@workshop-cdk-constructs/vscode-ide';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsJamTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const prop: VSCodeIdeProps = {
      diskSize: 30,
      name: 'aws-jam-test',
      availabilityZone: 'ap-northeast-2a',
      additionalIamPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName("AdministratorAccess"),
      ]
    }

    const ide = new VSCodeIde(this, 'Ide', prop );

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsJamTestQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
