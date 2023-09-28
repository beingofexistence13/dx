<div align="center">
  <a href="https://coder.com#gh-light-mode-only">
    <img src="./docs/images/logo-black.png" style="width: 128px">
  </a>
  <a href="https://coder.com#gh-dark-mode-only">
    <img src="./docs/images/logo-white.png" style="width: 128px">
  </a>

  <h1>
  Self-Hosted Remote Development Environments
  </h1>

  <a href="https://coder.com#gh-light-mode-only">
    <img src="./docs/images/banner-black.png" style="width: 650px">
  </a>
  <a href="https://coder.com#gh-dark-mode-only">
    <img src="./docs/images/banner-white.png" style="width: 650px">
  </a>

  <br>
  <br>

[Quickstart](#quickstart) | [Docs](https://coder.com/docs) | [Why Coder](https://coder.com/why) | [Enterprise](https://coder.com/docs/v2/latest/enterprise)

[![discord](https://img.shields.io/discord/747933592273027093?label=discord)](https://discord.gg/coder)
[![codecov](https://codecov.io/gh/coder/coder/branch/main/graph/badge.svg?token=TNLW3OAP6G)](https://codecov.io/gh/coder/coder)
[![release](https://img.shields.io/github/v/release/coder/coder)](https://github.com/coder/coder/releases/latest)
[![godoc](https://pkg.go.dev/badge/github.com/coder/coder.svg)](https://pkg.go.dev/github.com/coder/coder)
[![Go Report Card](https://goreportcard.com/badge/github.com/coder/coder)](https://goreportcard.com/report/github.com/coder/coder)
[![license](https://img.shields.io/github/license/coder/coder)](./LICENSE)

</div>

[Coder](https://coder.com) enables organizations to set up development environments in the cloud. Environments are defined with Terraform, connected through a secure high-speed Wireguard® tunnel, and are automatically shut down when not in use to save on costs. Coder gives engineering teams the flexibility to use the cloud for workloads that are most beneficial to them.

- Define development environments in Terraform
  - EC2 VMs, Kubernetes Pods, Docker Containers, etc.
- Automatically shutdown idle resources to save on costs
- Onboard developers in seconds instead of days

<p align="center">
  <img src="./docs/images/hero-image.png">
</p>

## Quickstart

The most convenient way to try Coder is to install it on your local machine and experiment with provisioning development environments using Docker (works on Linux, macOS, and Windows).

```
# First, install Coder
curl -L https://coder.com/install.sh | sh

# Start the Coder server (caches data in ~/.cache/coder)
coder server

# Navigate to http://localhost:3000 to create your initial user
# Create a Docker template, and provision a workspace
```

## Install

The easiest way to install Coder is to use our
[install script](https://github.com/coder/coder/blob/main/install.sh) for Linux
and macOS. For Windows, use the latest `..._installer.exe` file from GitHub
Releases.

```bash
curl -L https://coder.com/install.sh | sh
```

You can run the install script with `--dry-run` to see the commands that will be used to install without executing them. You can modify the installation process by including flags. Run the install script with `--help` for reference.

> See [install](docs/install) for additional methods.

Once installed, you can start a production deployment<sup>1</sup> with a single command:

```shell
# Automatically sets up an external access URL on *.try.coder.app
coder server

# Requires a PostgreSQL instance (version 13 or higher) and external access URL
coder server --postgres-url <url> --access-url <url>
```

> <sup>1</sup> For production deployments, set up an external PostgreSQL instance for reliability.

Use `coder --help` to get a list of flags and environment variables. Use our [install guides](https://coder.com/docs/v2/latest/install) for a full walkthrough.

## Documentation

Browse our docs [here](https://coder.com/docs/v2) or visit a specific section below:

- [**Templates**](https://coder.com/docs/v2/latest/templates): Templates are written in Terraform and describe the infrastructure for workspaces
- [**Workspaces**](https://coder.com/docs/v2/latest/workspaces): Workspaces contain the IDEs, dependencies, and configuration information needed for software development
- [**IDEs**](https://coder.com/docs/v2/latest/ides): Connect your existing editor to a workspace
- [**Administration**](https://coder.com/docs/v2/latest/admin): Learn how to operate Coder
- [**Enterprise**](https://coder.com/docs/v2/latest/enterprise): Learn about our paid features built for large teams

## Community and Support

Feel free to [open an issue](https://github.com/coder/coder/issues/new) if you have questions, run into bugs, or have a feature request.

[Join our Discord](https://discord.gg/coder) to provide feedback on in-progress features, and chat with the community using Coder!

## Contributing

Contributions are welcome! Read the [contributing docs](https://coder.com/docs/v2/latest/CONTRIBUTING) to get started.

Find our list of contributors [here](https://github.com/coder/coder/graphs/contributors).

## Related

We are always working on new integrations. Feel free to open an issue to request an integration. Contributions are welcome in any official or community repositories.

### Official

- [**VS Code Extension**](https://marketplace.visualstudio.com/items?itemName=coder.coder-remote): Open any Coder workspace in VS Code with a single click
- [**JetBrains Gateway Extension**](https://plugins.jetbrains.com/plugin/19620-coder): Open any Coder workspace in JetBrains Gateway with a single click
- [**Self-Hosted VS Code Extension Marketplace**](https://github.com/coder/code-marketplace): A private extension marketplace that works in restricted or airgapped networks integrating with [code-server](https://github.com/coder/code-server).

### Community

- [**Provision Coder with Terraform**](https://github.com/ElliotG/coder-oss-tf): Provision Coder on Google GKE, Azure AKS, AWS EKS, DigitalOcean DOKS, IBMCloud K8s, OVHCloud K8s, and Scaleway K8s Kapsule with Terraform
- [**Coder GitHub Action**](https://github.com/marketplace/actions/update-coder-template): A GitHub Action that updates Coder templates
- [**Various Templates**](./examples/templates/community-templates.md): Hetzner Cloud, Docker in Docker, and other templates the community has built.












gitpod /workspace/coder (main) $ coder login https://coder.com/docs/v2/latest/admin/configure
build info: unexpected status code 404: unexpected non-JSON response "text/html; charset=UTF-8"
    Error:
<html><head>
<meta http-equiv="content-type" content="text/html;charset=utf-8">
<title>404 Page not found</title>
</head>
<body text="#000000" bgcolor="#ffffff">
<h1>Error: Page not found</h1>
<h2>The requested URL was not found on this server.</h2>
<h2></h2>
</body></html>

> Your Coder deployment hasn't been set up!
> Would you like to create the first user? (yes/no) ^C
gitpod /workspace/coder (main) $ coder login https://h64stih7k68ds.pit-1.try.coder.app
> Your Coder deployment hasn't been set up!
> Would you like to create the first user? (yes/no) yes
> What  username  would you like? (gitpod) emon
> What's your  email ? ajju40959@gmail.com
> Enter a  password :
> Confirm  password :
> Start a 30-day trial of Enterprise? (yes/no) no

  Welcome to Coder, emon! You're authenticated.

  Get started by creating a template:  coder templates init
gitpod /workspace/coder (main) $ coder templates init
A template defines infrastructure as code to be provisioned for individual
developer workspaces. Select an example to be copied to the active directory:

Type to search

  > Develop in Docker
      Develop inside Docker containers using your local daemon
Extracting  docker  to ./docker...
Create your template by running:

   cd ./docker && coder templates create

Examples provide a starting point and are expected to be edited! 🎨
gitpod /workspace/coder (main) $  cd ./docker && coder templates create
WARN: No .terraform.lock.hcl file found
  | When provisioning, Coder will be unable to cache providers without a lockfile and must download them from the internet each time.
  | Create one by running  terraform init  in your template directory.
> Upload "."? (yes/no) yes
==> ⧗ Queued
=== ✔ Queued [803ms]
==> ⧗ Setting up
=== ✔ Setting up [0ms]
==> ⧗ Parsing template parameters
=== ✔ Parsing template parameters [6ms]
==> ⧗ Detecting persistent resources
2023-09-27 13:14:53.302Z Terraform 1.4.6
2023-09-27 13:14:53.736Z data.coder_provisioner.me: Refreshing...
2023-09-27 13:14:53.736Z data.coder_workspace.me: Refreshing...
2023-09-27 13:14:53.737Z data.coder_workspace.me: Refresh complete after 0s [id=f3248170-884a-4235-9244-7679e9eb88b0]
2023-09-27 13:14:53.737Z data.coder_provisioner.me: Refresh complete after 0s [id=415ed30e-e2bf-4eb2-9858-646781f5c05a]
2023-09-27 13:14:54.414Z coder_agent.main: Plan to create
2023-09-27 13:14:54.414Z coder_app.code-server: Plan to create
2023-09-27 13:14:54.414Z docker_volume.home_volume: Plan to create
2023-09-27 13:14:54.414Z docker_image.main: Plan to create
2023-09-27 13:14:54.414Z docker_container.workspace[0]: Plan to create
2023-09-27 13:14:54.414Z Plan: 5 to add, 0 to change, 0 to destroy.
=== ✔ Detecting persistent resources [5029ms]
==> ⧗ Detecting ephemeral resources
2023-09-27 13:14:55.355Z Terraform 1.4.6
2023-09-27 13:14:55.775Z data.coder_provisioner.me: Refreshing...
2023-09-27 13:14:55.775Z data.coder_workspace.me: Refreshing...
2023-09-27 13:14:55.775Z data.coder_provisioner.me: Refresh complete after 0s [id=99164ba1-deb0-4f80-9c34-bc240174f6aa]
2023-09-27 13:14:55.776Z data.coder_workspace.me: Refresh complete after 0s [id=9b1ef805-ea3d-49ab-9977-f47e84b09542]
2023-09-27 13:14:55.793Z docker_volume.home_volume: Plan to create
2023-09-27 13:14:55.793Z docker_image.main: Plan to create
2023-09-27 13:14:55.793Z coder_agent.main: Plan to create
2023-09-27 13:14:55.793Z coder_app.code-server: Plan to create
2023-09-27 13:14:55.793Z Plan: 4 to add, 0 to change, 0 to destroy.
=== ✔ Detecting ephemeral resources [1376ms]
==> ⧗ Cleaning Up
=== ✔ Cleaning Up [23ms]
┌──────────────────────────────────┐
│ Template Preview                 │
├──────────────────────────────────┤
│ RESOURCE                         │
├──────────────────────────────────┤
│ docker_container.workspace       │
│ └─ main (linux, amd64)           │
├──────────────────────────────────┤
│ docker_image.main                │
├──────────────────────────────────┤
│ docker_volume.home_volume        │
└──────────────────────────────────┘
> Confirm create? (yes/no) yes

The docker template has been created at Sep 27 13:15:07! Developers can
provision a workspace with this template using:

   coder create --template="docker" [workspace name]

gitpod /workspace/coder/docker (main) $ coder create --template="docker" emon
Planning workspace...
==> ⧗ Queued
=== ✔ Queued [585ms]
==> ⧗ Setting up
=== ✔ Setting up [49ms]
==> ⧗ Detecting persistent resources
=== ✔ Detecting persistent resources [2766ms]
==> ⧗ Cleaning Up
=== ✔ Cleaning Up [17ms]
┌──────────────────────────────────────────────────┐
│ Workspace Preview                                │
├──────────────────────────────────────────────────┤
│ RESOURCE                    ACCESS               │
├──────────────────────────────────────────────────┤
│ docker_container.workspace                       │
│ └─ main (linux, amd64)       coder ssh emon      │
├──────────────────────────────────────────────────┤
│ docker_image.main                                │
├──────────────────────────────────────────────────┤
│ docker_volume.home_volume                        │
└──────────────────────────────────────────────────┘
> Confirm create? (yes/no) yes
==> ⧗ Queued
=== ✔ Queued [511ms]
==> ⧗ Setting up
=== ✔ Setting up [47ms]
==> ⧗ Planning infrastructure
2023-09-27 13:15:37.420Z Terraform 1.4.6
2023-09-27 13:15:37.826Z data.coder_workspace.me: Refreshing...
2023-09-27 13:15:37.826Z data.coder_provisioner.me: Refreshing...
2023-09-27 13:15:37.827Z data.coder_provisioner.me: Refresh complete after 0s [id=6101d96a-0866-47b5-9b08-c7ad1dcf03f9]
2023-09-27 13:15:37.827Z data.coder_workspace.me: Refresh complete after 0s [id=94717c26-d87f-40ee-bf03-3064d2dc115e]
2023-09-27 13:15:37.851Z docker_volume.home_volume: Plan to create
2023-09-27 13:15:37.852Z docker_image.main: Plan to create
2023-09-27 13:15:37.852Z coder_agent.main: Plan to create
2023-09-27 13:15:37.852Z coder_app.code-server: Plan to create
2023-09-27 13:15:37.852Z docker_container.workspace[0]: Plan to create
2023-09-27 13:15:37.852Z Plan: 5 to add, 0 to change, 0 to destroy.
=== ✔ Planning infrastructure [2825ms]
==> ⧗ Starting workspace
2023-09-27 13:15:38.352Z Terraform 1.4.6
2023-09-27 13:15:38.549Z docker_volume.home_volume: Plan to create
2023-09-27 13:15:38.549Z docker_image.main: Plan to create
2023-09-27 13:15:38.549Z coder_agent.main: Plan to create
2023-09-27 13:15:38.550Z coder_app.code-server: Plan to create
2023-09-27 13:15:38.550Z docker_container.workspace[0]: Plan to create
2023-09-27 13:15:38.652Z docker_volume.home_volume: Creating...
2023-09-27 13:15:38.655Z docker_image.main: Creating...
2023-09-27 13:15:38.657Z coder_agent.main: Creating...
2023-09-27 13:15:38.660Z docker_volume.home_volume: Creation complete after 0s [id=coder-94717c26-d87f-40ee-bf03-3064d2dc115e-home]
2023-09-27 13:15:38.678Z coder_agent.main: Creation complete after 0s [id=bf90b828-ba37-42ae-8fd0-efd9f4d37ef3]
2023-09-27 13:15:38.683Z coder_app.code-server: Creating...
2023-09-27 13:15:38.685Z coder_app.code-server: Creation complete after 0s [id=ae641fa1-bc1c-438a-ac60-2b27563a8efd]
2023-09-27 13:15:48.656Z docker_image.main: Still creating... [10s elapsed]
2023-09-27 13:15:58.657Z docker_image.main: Still creating... [20s elapsed]
2023-09-27 13:16:08.658Z docker_image.main: Still creating... [30s elapsed]
2023-09-27 13:16:18.658Z docker_image.main: Still creating... [40s elapsed]
2023-09-27 13:16:28.659Z docker_image.main: Still creating... [50s elapsed]
2023-09-27 13:16:29.662Z docker_image.main: Creation complete after 51s [id=sha256:6ebf41e9352448fee9e582f570dc536eb6d94095848598407a1c61d79fcd4257coder-94717c26-d87f-40ee-bf03-3064d2dc115e]
2023-09-27 13:16:29.673Z docker_container.workspace[0]: Creating...
2023-09-27 13:16:30.212Z docker_container.workspace[0]: Creation complete after 0s [id=b69d167d05a9116f97fd049f8dc482ac61814ccd9be4d2cb81d4dc13fe089d15]
2023-09-27 13:16:30.218Z Apply complete! Resources: 5 added, 0 changed, 0 destroyed.
2023-09-27 13:16:30.218Z Outputs: 0
=== ✔ Starting workspace [52459ms]
==> ⧗ Cleaning Up
=== ✔ Cleaning Up [9ms]

The emon workspace has been created at Sep 27 13:16:30!





























gitpod /workspace/coder (main) $ export CODER_DATA=$HOME/.config/coderv2-docker
export DOCKER_GROUP=$(getent group docker | cut -d: -f3)
mkdir -p $CODER_DATA
docker run --rm -it \
    -v $CODER_DATA:/home/coder/.config \
    -v /var/run/docker.sock:/var/run/docker.sock \
    --group-add $DOCKER_GROUP \
    ghcr.io/coder/coder:latest
"docker run" requires at least 1 argument.
See 'docker run --help'.

Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Create and run a new container from an image
gitpod /workspace/coder (main) $ curl -L https://coder.com/install.sh | sh
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100 18147  100 18147    0     0  40455      0 --:--:-- --:--:-- --:--:-- 40455
Ubuntu 22.04.3 LTS
Installing v2.1.5 of the amd64 deb package from GitHub.

+ mkdir -p ~/.cache/coder
+ curl -#fL -o ~/.cache/coder/coder_2.1.5_amd64.deb.incomplete -C - https://github.com/coder/coder/releases/download/v2.1.5/coder_2.1.5_linux_amd64.deb
######################################################################## 100.0%
+ mv ~/.cache/coder/coder_2.1.5_amd64.deb.incomplete ~/.cache/coder/coder_2.1.5_amd64.deb
+ sudo dpkg --force-confdef --force-confold -i ~/.cache/coder/coder_2.1.5_amd64.deb
Selecting previously unselected package coder.
(Reading database ... 35597 files and directories currently installed.)
Preparing to unpack .../coder/coder_2.1.5_amd64.deb ...
Unpacking coder (2.1.5-1) ...
Setting up coder (2.1.5-1) ...

deb package has been installed.

To run a Coder server:

  # Start Coder now and on reboot
  $ sudo systemctl enable --now coder
  $ journalctl -u coder.service -b

  # Or just run the server directly
  $ coder server

  Configuring Coder: https://coder.com/docs/v2/latest/admin/configure

To connect to a Coder deployment:

  $ coder login <deployment url>

gitpod /workspace/coder (main) $ coder login https://coder.com/docs/v2/latest/admin/configure
build info: unexpected status code 404: unexpected non-JSON response "text/html; charset=UTF-8"
    Error:
<html><head>
<meta http-equiv="content-type" content="text/html;charset=utf-8">
<title>404 Page not found</title>
</head>
<body text="#000000" bgcolor="#ffffff">
<h1>Error: Page not found</h1>
<h2>The requested URL was not found on this server.</h2>
<h2></h2>
</body></html>

> Your Coder deployment hasn't been set up!
> Would you like to create the first user? (yes/no) yes
> What  username  would you like? (gitpod) emon
> What's your  email ? ajju40959@gmail.com
> Enter a  password :
> Confirm  password :
Passwords do not match
> Enter a  password :
insecure password, try including more special characters, using lowercase letters, using uppercase letters or using a longer password
> Enter a  password :
> Confirm  password :
Passwords do not match
> Enter a  password :
insecure password, try including more special characters, using lowercase letters or using a longer password
> Enter a  password :
insecure password, try including more special characters or using a longer password
> Enter a  password :
> Confirm  password :
> Start a 30-day trial of Enterprise? (yes/no) no
unexpected non-JSON response "text/html; charset=UTF-8"

<html><head>
<meta http-equiv="content-type" content="text/html;charset=utf-8">
<title>404 Page not found</title>
</head>
<body text="#000000" bgcolor="#ffffff">
<h1>Error: Page not found</h1>
<h2>The requested URL was not found on this server.</h2>
<h2></h2>
</body></html>

gitpod /workspace/coder (main) $ coder server
Coder v2.1.5+66019ef - Your Self-Hosted Remote Development Platform
Started HTTP listener at http://127.0.0.1:3000
Using built-in PostgreSQL (/home/gitpod/.config/coderv2/postgres)
Opening tunnel so workspaces can connect to your deployment. For production scenarios, specify an external access URL
Error picking closest dev tunnel: socket: permission denied
Defaulting to US East Pittsburgh
Using tunnel in US East Pittsburgh with latency  0s .

View the Web UI: https://h64stih7k68ds.pit-1.try.coder.app

==> Logs will stream in below (press ctrl+c to gracefully exit):
2023-09-27 13:13:52.333 [info]  coderd: audit_log  ID=274ec445-fe3a-48fb-8f33-d9fe25748849  Time="2023-09-27T13:13:52.332336Z"  UserID=b7b37cd0-714d-4e60-ba56-942e61ed86c0  OrganizationID=00000000-0000-0000-0000-000000000000  Ip=fcca::1  UserAgent=Go-http-client/2.0  ResourceType=api_key  ResourceID=b7b37cd0-714d-4e60-ba56-942e61ed86c0  ResourceTarget=""  Action=login  Diff="{}"  StatusCode=201  AdditionalFields="{}"  RequestID=c2f233f9-3e48-414d-af94-0f8e0fb93624  ResourceIcon=""  actor="&{ID:b7b37cd0-714d-4e60-ba56-942e61ed86c0 Email:ajju40959@gmail.com Username:emon}"
2023-09-27 13:14:48.979 [info]  coderd: audit_log  ID=62d38dfe-895a-40fd-b8a6-4da200da991e  Time="2023-09-27T13:14:48.978053Z"  UserID=b7b37cd0-714d-4e60-ba56-942e61ed86c0  OrganizationID=00000000-0000-0000-0000-000000000000  Ip=fcca::1  UserAgent=Go-http-client/2.0  ResourceType=template_version  ResourceID=e9cfd83a-60f0-49c4-8422-2c676682eb65  ResourceTarget=unruffled_cohen3  Action=create  Diff="{\"created_by\":{\"Old\":\"\",\"New\":\"b7b37cd0-714d-4e60-ba56-942e61ed86c0\",\"Secret\":false},\"id\":{\"Old\":\"\",\"New\":\"e9cfd83a-60f0-49c4-8422-2c676682eb65\",\"Secret\":false},\"name\":{\"Old\":\"\",\"New\":\"unruffled_cohen3\",\"Secret\":false}}"  StatusCode=201  AdditionalFields="{}"  RequestID=634bd3c7-cfd6-48ad-b199-114f11ddb268  ResourceIcon=""  actor="&{ID:b7b37cd0-714d-4e60-ba56-942e61ed86c0 Email:ajju40959@gmail.com Username:emon}"
2023-09-27 13:14:49.848 [info]  terraform: unpacking template source archive  trace=0x1453c00  span=0x1453ca0  session_id=78e83f09-2ed7-4d58-98e0-6479c170afd4  size_bytes=9728
2023-09-27 13:14:54.883 [info]  provisionerd.runner: parse dry-run provision successful  job_id=30fcf935-0604-4946-8637-880a34a3d5d4  resource_count=3  resources="[name:\"workspace\"  type:\"docker_container\"  agents:{name:\"main\"  env:{key:\"GIT_AUTHOR_EMAIL\"  value:\"\"}  env:{key:\"GIT_AUTHOR_NAME\"  value:\"default\"}  env:{key:\"GIT_COMMITTER_EMAIL\"  value:\"\"}  env:{key:\"GIT_COMMITTER_NAME\"  value:\"default\"}  startup_script:\"set -e\\n\\n# install and start code-server\\ncurl -fsSL https://code-server.dev/install.sh | sh -s -- --method=standalone --prefix=/tmp/code-server --version 4.11.0\\n/tmp/code-server/bin/code-server --auth none --port 13337 >/tmp/code-server.log 2>&1 &\\n\"  operating_system:\"linux\"  architecture:\"amd64\"  apps:{slug:\"code-server\"  display_name:\"code-server\"  url:\"http://localhost:13337/?folder=/home/default\"  icon:\"/icon/code.svg\"  healthcheck:{url:\"http://localhost:13337/healthz\"  interval:5  threshold:6}}  token:\"\"  connection_timeout_seconds:120  startup_script_timeout_seconds:180  shutdown_script_timeout_seconds:300  metadata:{key:\"0_cpu_usage\"  display_name:\"CPU Usage\"  script:\"coder stat cpu\"  interval:10  timeout:1}  metadata:{key:\"1_ram_usage\"  display_name:\"RAM Usage\"  script:\"coder stat mem\"  interval:10  timeout:1}  metadata:{key:\"3_home_disk\"  display_name:\"Home Disk\"  script:\"coder stat disk --path ${HOME}\"  interval:60  timeout:1}  metadata:{key:\"4_cpu_usage_host\"  display_name:\"CPU Usage (Host)\"  script:\"coder stat cpu --host\"  interval:10  timeout:1}  metadata:{key:\"5_mem_usage_host\"  display_name:\"Memory Usage (Host)\"  script:\"coder stat mem --host\"  interval:10  timeout:1}  metadata:{key:\"6_load_host\"  display_name:\"Load Average (Host)\"  script:\"      echo \\\"`cat /proc/loadavg | awk '{ print $1 }'` `nproc`\\\" | awk '{ printf \\\"%0.2f\\\", $1/$2 }'\\n\"  interval:60  timeout:1}  metadata:{key:\"7_swap_host\"  display_name:\"Swap Usage (Host)\"  script:\"      free -b | awk '/^Swap/ { printf(\\\"%.1f/%.1f\\\", $3/1024.0/1024.0/1024.0, $2/1024.0/1024.0/1024.0) }'\\n\"  interval:10  timeout:1}  startup_script_behavior:\"non-blocking\"  display_apps:{vscode:true  web_terminal:true  ssh_helper:true  port_forwarding_helper:true}} name:\"main\"  type:\"docker_image\" name:\"home_volume\"  type:\"docker_volume\"]"
2023-09-27 13:14:56.259 [info]  provisionerd.runner: parse dry-run provision successful  job_id=30fcf935-0604-4946-8637-880a34a3d5d4  resource_count=2  resources="[name:\"main\"  type:\"docker_image\" name:\"home_volume\"  type:\"docker_volume\"]"
2023-09-27 13:14:56.264 [info]  terraform: recv done on Session  trace=0x1453c00  span=0x1453ca0  session_id=78e83f09-2ed7-4d58-98e0-6479c170afd4  error=EOF
2023-09-27 13:14:56.265 [info]  coderd.provisionerd-reverent_murdock4: inserting template import job resource  trace=0x1453c00  span=0x1453ca0  job_id=30fcf935-0604-4946-8637-880a34a3d5d4  resource_name=workspace  resource_type=docker_container  transition=start
2023-09-27 13:14:56.275 [info]  coderd.provisionerd-reverent_murdock4: inserting template import job resource  trace=0x1453c00  span=0x1453ca0  job_id=30fcf935-0604-4946-8637-880a34a3d5d4  resource_name=main  resource_type=docker_image  transition=start
2023-09-27 13:14:56.276 [info]  coderd.provisionerd-reverent_murdock4: inserting template import job resource  trace=0x1453c00  span=0x1453ca0  job_id=30fcf935-0604-4946-8637-880a34a3d5d4  resource_name=home_volume  resource_type=docker_volume  transition=start
2023-09-27 13:14:56.278 [info]  coderd.provisionerd-reverent_murdock4: inserting template import job resource  trace=0x1453c00  span=0x1453ca0  job_id=30fcf935-0604-4946-8637-880a34a3d5d4  resource_name=main  resource_type=docker_image  transition=stop
2023-09-27 13:14:56.279 [info]  coderd.provisionerd-reverent_murdock4: inserting template import job resource  trace=0x1453c00  span=0x1453ca0  job_id=30fcf935-0604-4946-8637-880a34a3d5d4  resource_name=home_volume  resource_type=docker_volume  transition=stop
2023-09-27 13:15:07.030 [info]  coderd: audit_log  ID=c38e30f0-0101-42d1-a6b8-574d23af0cf0  Time="2023-09-27T13:15:07.029383Z"  UserID=b7b37cd0-714d-4e60-ba56-942e61ed86c0  OrganizationID=00000000-0000-0000-0000-000000000000  Ip=fcca::1  UserAgent=Go-http-client/2.0  ResourceType=template_version  ResourceID=e9cfd83a-60f0-49c4-8422-2c676682eb65  ResourceTarget=unruffled_cohen3  Action=write  Diff="{\"template_id\":{\"Old\":\"null\",\"New\":\"987e046a-dbf8-4673-93b1-b09d144d1e6a\",\"Secret\":false}}"  StatusCode=201  AdditionalFields="{}"  RequestID=dfd4c118-283b-48ff-8096-6fdb49274188  ResourceIcon=""  actor="&{ID:b7b37cd0-714d-4e60-ba56-942e61ed86c0 Email:ajju40959@gmail.com Username:emon}"
2023-09-27 13:15:07.033 [info]  coderd: audit_log  ID=c2658bef-2b0d-466b-afbf-3e73379a38f5  Time="2023-09-27T13:15:07.031408Z"  UserID=b7b37cd0-714d-4e60-ba56-942e61ed86c0  OrganizationID=00000000-0000-0000-0000-000000000000  Ip=fcca::1  UserAgent=Go-http-client/2.0  ResourceType=template  ResourceID=987e046a-dbf8-4673-93b1-b09d144d1e6a  ResourceTarget=docker  Action=create  Diff="{\"active_version_id\":{\"Old\":\"\",\"New\":\"e9cfd83a-60f0-49c4-8422-2c676682eb65\",\"Secret\":false},\"allow_user_autostart\":{\"Old\":false,\"New\":true,\"Secret\":false},\"allow_user_autostop\":{\"Old\":false,\"New\":true,\"Secret\":false},\"created_by\":{\"Old\":\"\",\"New\":\"b7b37cd0-714d-4e60-ba56-942e61ed86c0\",\"Secret\":false},\"default_ttl\":{\"Old\":0,\"New\":86400000000000,\"Secret\":false},\"group_acl\":{\"Old\":\"map[]\",\"New\":\"map[0fde6901-bca7-4880-ad52-78900aecd237:[read]]\",\"Secret\":false},\"id\":{\"Old\":\"\",\"New\":\"987e046a-dbf8-4673-93b1-b09d144d1e6a\",\"Secret\":false},\"name\":{\"Old\":\"\",\"New\":\"docker\",\"Secret\":false},\"provisioner\":{\"Old\":\"\",\"New\":\"terraform\",\"Secret\":false}}"  StatusCode=201  AdditionalFields="{}"  RequestID=dfd4c118-283b-48ff-8096-6fdb49274188  ResourceIcon=""  actor="&{ID:b7b37cd0-714d-4e60-ba56-942e61ed86c0 Email:ajju40959@gmail.com Username:emon}"
2023-09-27 13:15:24.722 [info]  terraform: unpacking template source archive  trace=0x1453c00  span=0x1453ca0  session_id=7f6aeaad-c9a0-4861-8974-736b1e9a255f  size_bytes=9728
2023-09-27 13:15:27.536 [info]  provisionerd.runner: parse dry-run provision successful  job_id=79444439-3e69-4773-a328-408b8322c4bc  resource_count=3  resources="[name:\"workspace\"  type:\"docker_container\"  agents:{name:\"main\"  env:{key:\"GIT_AUTHOR_EMAIL\"  value:\"\"}  env:{key:\"GIT_AUTHOR_NAME\"  value:\"emon\"}  env:{key:\"GIT_COMMITTER_EMAIL\"  value:\"\"}  env:{key:\"GIT_COMMITTER_NAME\"  value:\"emon\"}  startup_script:\"set -e\\n\\n# install and start code-server\\ncurl -fsSL https://code-server.dev/install.sh | sh -s -- --method=standalone --prefix=/tmp/code-server --version 4.11.0\\n/tmp/code-server/bin/code-server --auth none --port 13337 >/tmp/code-server.log 2>&1 &\\n\"  operating_system:\"linux\"  architecture:\"amd64\"  apps:{slug:\"code-server\"  display_name:\"code-server\"  url:\"http://localhost:13337/?folder=/home/emon\"  icon:\"/icon/code.svg\"  healthcheck:{url:\"http://localhost:13337/healthz\"  interval:5  threshold:6}}  token:\"\"  connection_timeout_seconds:120  startup_script_timeout_seconds:180  shutdown_script_timeout_seconds:300  metadata:{key:\"0_cpu_usage\"  display_name:\"CPU Usage\"  script:\"coder stat cpu\"  interval:10  timeout:1}  metadata:{key:\"1_ram_usage\"  display_name:\"RAM Usage\"  script:\"coder stat mem\"  interval:10  timeout:1}  metadata:{key:\"3_home_disk\"  display_name:\"Home Disk\"  script:\"coder stat disk --path ${HOME}\"  interval:60  timeout:1}  metadata:{key:\"4_cpu_usage_host\"  display_name:\"CPU Usage (Host)\"  script:\"coder stat cpu --host\"  interval:10  timeout:1}  metadata:{key:\"5_mem_usage_host\"  display_name:\"Memory Usage (Host)\"  script:\"coder stat mem --host\"  interval:10  timeout:1}  metadata:{key:\"6_load_host\"  display_name:\"Load Average (Host)\"  script:\"      echo \\\"`cat /proc/loadavg | awk '{ print $1 }'` `nproc`\\\" | awk '{ printf \\\"%0.2f\\\", $1/$2 }'\\n\"  interval:60  timeout:1}  metadata:{key:\"7_swap_host\"  display_name:\"Swap Usage (Host)\"  script:\"      free -b | awk '/^Swap/ { printf(\\\"%.1f/%.1f\\\", $3/1024.0/1024.0/1024.0, $2/1024.0/1024.0/1024.0) }'\\n\"  interval:10  timeout:1}  startup_script_behavior:\"non-blocking\"  display_apps:{vscode:true  web_terminal:true  ssh_helper:true  port_forwarding_helper:true}} name:\"main\"  type:\"docker_image\" name:\"home_volume\"  type:\"docker_volume\"]"
2023-09-27 13:15:27.541 [info]  terraform: recv done on Session  trace=0x1453c00  span=0x1453ca0  session_id=7f6aeaad-c9a0-4861-8974-736b1e9a255f  error=EOF
2023-09-27 13:15:27.543 [info]  coderd.provisionerd-quirky_mendel6: inserting template dry-run job resource  trace=0x1453c00  span=0x1453ca0  job_id=79444439-3e69-4773-a328-408b8322c4bc  resource_name=workspace  resource_type=docker_container
2023-09-27 13:15:27.552 [info]  coderd.provisionerd-quirky_mendel6: inserting template dry-run job resource  trace=0x1453c00  span=0x1453ca0  job_id=79444439-3e69-4773-a328-408b8322c4bc  resource_name=main  resource_type=docker_image
2023-09-27 13:15:27.553 [info]  coderd.provisionerd-quirky_mendel6: inserting template dry-run job resource  trace=0x1453c00  span=0x1453ca0  job_id=79444439-3e69-4773-a328-408b8322c4bc  resource_name=home_volume  resource_type=docker_volume
2023-09-27 13:15:34.858 [info]  coderd: audit_log  ID=aaa76ab7-b23c-4de4-b7ab-7fa013afadce  Time="2023-09-27T13:15:34.857689Z"  UserID=b7b37cd0-714d-4e60-ba56-942e61ed86c0  OrganizationID=00000000-0000-0000-0000-000000000000  Ip=fcca::1  UserAgent=Go-http-client/2.0  ResourceType=workspace  ResourceID=94717c26-d87f-40ee-bf03-3064d2dc115e  ResourceTarget=emon  Action=create  Diff="{\"id\":{\"Old\":\"\",\"New\":\"94717c26-d87f-40ee-bf03-3064d2dc115e\",\"Secret\":false},\"name\":{\"Old\":\"\",\"New\":\"emon\",\"Secret\":false},\"owner_id\":{\"Old\":\"\",\"New\":\"b7b37cd0-714d-4e60-ba56-942e61ed86c0\",\"Secret\":false},\"template_id\":{\"Old\":\"\",\"New\":\"987e046a-dbf8-4673-93b1-b09d144d1e6a\",\"Secret\":false},\"ttl\":{\"Old\":0,\"New\":86400000000000,\"Secret\":false}}"  StatusCode=201  AdditionalFields="{\"workspace_name\":\"\",\"build_number\":\"\",\"build_reason\":\"\",\"workspace_owner\":\"emon\"}"  RequestID=001c06ef-3b5d-4fe0-9c61-15e8498e14ca  ResourceIcon=""  actor="&{ID:b7b37cd0-714d-4e60-ba56-942e61ed86c0 Email:ajju40959@gmail.com Username:emon}"
2023-09-27 13:15:35.435 [info]  terraform: unpacking template source archive  trace=0x1453c00  span=0x1453ca0  session_id=821a6db1-1269-49fe-8a83-b6dd9a9c3849  size_bytes=9728
2023-09-27 13:15:37.419 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="Terraform 1.4.6"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:37.825 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="data.coder_workspace.me: Refreshing..."  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:37.826 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="data.coder_provisioner.me: Refreshing..."  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:37.826 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="data.coder_provisioner.me: Refresh complete after 0s [id=6101d96a-0866-47b5-9b08-c7ad1dcf03f9]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:37.827 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="data.coder_workspace.me: Refresh complete after 0s [id=94717c26-d87f-40ee-bf03-3064d2dc115e]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:37.851 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_volume.home_volume: Plan to create"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:37.851 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_image.main: Plan to create"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:37.852 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="coder_agent.main: Plan to create"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:37.852 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="coder_app.code-server: Plan to create"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:37.852 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_container.workspace[0]: Plan to create"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:37.852 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="Plan: 5 to add, 0 to change, 0 to destroy."  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.302 [info]  provisionerd.runner: plan request successful  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  resource_count=3  resources="[name:\"workspace\"  type:\"docker_container\"  agents:{name:\"main\"  env:{key:\"GIT_AUTHOR_EMAIL\"  value:\"ajju40959@gmail.com\"}  env:{key:\"GIT_AUTHOR_NAME\"  value:\"emon\"}  env:{key:\"GIT_COMMITTER_EMAIL\"  value:\"ajju40959@gmail.com\"}  env:{key:\"GIT_COMMITTER_NAME\"  value:\"emon\"}  startup_script:\"set -e\\n\\n# install and start code-server\\ncurl -fsSL https://code-server.dev/install.sh | sh -s -- --method=standalone --prefix=/tmp/code-server --version 4.11.0\\n/tmp/code-server/bin/code-server --auth none --port 13337 >/tmp/code-server.log 2>&1 &\\n\"  operating_system:\"linux\"  architecture:\"amd64\"  apps:{slug:\"code-server\"  display_name:\"code-server\"  url:\"http://localhost:13337/?folder=/home/emon\"  icon:\"/icon/code.svg\"  healthcheck:{url:\"http://localhost:13337/healthz\"  interval:5  threshold:6}}  token:\"\"  connection_timeout_seconds:120  startup_script_timeout_seconds:180  shutdown_script_timeout_seconds:300  metadata:{key:\"0_cpu_usage\"  display_name:\"CPU Usage\"  script:\"coder stat cpu\"  interval:10  timeout:1}  metadata:{key:\"1_ram_usage\"  display_name:\"RAM Usage\"  script:\"coder stat mem\"  interval:10  timeout:1}  metadata:{key:\"3_home_disk\"  display_name:\"Home Disk\"  script:\"coder stat disk --path ${HOME}\"  interval:60  timeout:1}  metadata:{key:\"4_cpu_usage_host\"  display_name:\"CPU Usage (Host)\"  script:\"coder stat cpu --host\"  interval:10  timeout:1}  metadata:{key:\"5_mem_usage_host\"  display_name:\"Memory Usage (Host)\"  script:\"coder stat mem --host\"  interval:10  timeout:1}  metadata:{key:\"6_load_host\"  display_name:\"Load Average (Host)\"  script:\"      echo \\\"`cat /proc/loadavg | awk '{ print $1 }'` `nproc`\\\" | awk '{ printf \\\"%0.2f\\\", $1/$2 }'\\n\"  interval:60  timeout:1}  metadata:{key:\"7_swap_host\"  display_name:\"Swap Usage (Host)\"  script:\"      free -b | awk '/^Swap/ { printf(\\\"%.1f/%.1f\\\", $3/1024.0/1024.0/1024.0, $2/1024.0/1024.0/1024.0) }'\\n\"  interval:10  timeout:1}  startup_script_behavior:\"non-blocking\"  display_apps:{vscode:true  web_terminal:true  ssh_helper:true  port_forwarding_helper:true}} name:\"main\"  type:\"docker_image\" name:\"home_volume\"  type:\"docker_volume\"]"
2023-09-27 13:15:38.352 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="Terraform 1.4.6"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.549 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_volume.home_volume: Plan to create"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.549 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_image.main: Plan to create"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.549 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="coder_agent.main: Plan to create"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.549 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="coder_app.code-server: Plan to create"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.550 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_container.workspace[0]: Plan to create"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.651 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_volume.home_volume: Creating..."  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.654 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_image.main: Creating..."  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.656 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="coder_agent.main: Creating..."  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.660 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_volume.home_volume: Creation complete after 0s [id=coder-94717c26-d87f-40ee-bf03-3064d2dc115e-home]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.678 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="coder_agent.main: Creation complete after 0s [id=bf90b828-ba37-42ae-8fd0-efd9f4d37ef3]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.682 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="coder_app.code-server: Creating..."  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:38.684 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="coder_app.code-server: Creation complete after 0s [id=ae641fa1-bc1c-438a-ac60-2b27563a8efd]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:48.656 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_image.main: Still creating... [10s elapsed]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:15:58.657 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_image.main: Still creating... [20s elapsed]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:16:08.657 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_image.main: Still creating... [30s elapsed]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:16:18.658 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_image.main: Still creating... [40s elapsed]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:16:28.658 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_image.main: Still creating... [50s elapsed]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:16:29.661 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_image.main: Creation complete after 51s [id=sha256:6ebf41e9352448fee9e582f570dc536eb6d94095848598407a1c61d79fcd4257coder-94717c26-d87f-40ee-bf03-3064d2dc115e]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:16:29.673 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_container.workspace[0]: Creating..."  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:16:30.211 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="docker_container.workspace[0]: Creation complete after 0s [id=b69d167d05a9116f97fd049f8dc482ac61814ccd9be4d2cb81d4dc13fe089d15]"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:16:30.217 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="Apply complete! Resources: 5 added, 0 changed, 0 destroyed."  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:16:30.218 [info]  provisionerd.runner: workspace provisioner job logged  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  level=INFO  output="Outputs: 0"  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5
2023-09-27 13:16:30.763 [info]  provisionerd.runner: apply successful  job_id=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  template_name=docker  template_version=unruffled_cohen3  workspace_build_id=35037564-6f96-417e-b391-6c5024abf9b5  workspace_id=94717c26-d87f-40ee-bf03-3064d2dc115e  workspace_name=emon  workspace_owner=emon  workspace_transition=start  resource_count=3  resources="[name:\"workspace\"  type:\"docker_container\"  agents:{id:\"bf90b828-ba37-42ae-8fd0-efd9f4d37ef3\"  name:\"main\"  env:{key:\"GIT_AUTHOR_EMAIL\"  value:\"ajju40959@gmail.com\"}  env:{key:\"GIT_AUTHOR_NAME\"  value:\"emon\"}  env:{key:\"GIT_COMMITTER_EMAIL\"  value:\"ajju40959@gmail.com\"}  env:{key:\"GIT_COMMITTER_NAME\"  value:\"emon\"}  startup_script:\"set -e\\n\\n# install and start code-server\\ncurl -fsSL https://code-server.dev/install.sh | sh -s -- --method=standalone --prefix=/tmp/code-server --version 4.11.0\\n/tmp/code-server/bin/code-server --auth none --port 13337 >/tmp/code-server.log 2>&1 &\\n\"  operating_system:\"linux\"  architecture:\"amd64\"  apps:{slug:\"code-server\"  display_name:\"code-server\"  url:\"http://localhost:13337/?folder=/home/emon\"  icon:\"/icon/code.svg\"  healthcheck:{url:\"http://localhost:13337/healthz\"  interval:5  threshold:6}}  token:\"094fc156-d7e2-4b07-8227-936f2de22032\"  connection_timeout_seconds:120  startup_script_timeout_seconds:180  shutdown_script_timeout_seconds:300  metadata:{key:\"0_cpu_usage\"  display_name:\"CPU Usage\"  script:\"coder stat cpu\"  interval:10  timeout:1}  metadata:{key:\"1_ram_usage\"  display_name:\"RAM Usage\"  script:\"coder stat mem\"  interval:10  timeout:1}  metadata:{key:\"3_home_disk\"  display_name:\"Home Disk\"  script:\"coder stat disk --path ${HOME}\"  interval:60  timeout:1}  metadata:{key:\"4_cpu_usage_host\"  display_name:\"CPU Usage (Host)\"  script:\"coder stat cpu --host\"  interval:10  timeout:1}  metadata:{key:\"5_mem_usage_host\"  display_name:\"Memory Usage (Host)\"  script:\"coder stat mem --host\"  interval:10  timeout:1}  metadata:{key:\"6_load_host\"  display_name:\"Load Average (Host)\"  script:\"      echo \\\"`cat /proc/loadavg | awk '{ print $1 }'` `nproc`\\\" | awk '{ printf \\\"%0.2f\\\", $1/$2 }'\\n\"  interval:60  timeout:1}  metadata:{key:\"7_swap_host\"  display_name:\"Swap Usage (Host)\"  script:\"      free -b | awk '/^Swap/ { printf(\\\"%.1f/%.1f\\\", $3/1024.0/1024.0/1024.0, $2/1024.0/1024.0/1024.0) }'\\n\"  interval:10  timeout:1}  startup_script_behavior:\"non-blocking\"  display_apps:{vscode:true  web_terminal:true  ssh_helper:true  port_forwarding_helper:true}} name:\"main\"  type:\"docker_image\" name:\"home_volume\"  type:\"docker_volume\"]"  state_len=17646
2023-09-27 13:16:30.771 [info]  terraform: recv done on Session  trace=0x1453c00  span=0x1453ca0  session_id=821a6db1-1269-49fe-8a83-b6dd9a9c3849  error=EOF
2023-09-27 13:16:30.788 [info]  coderd: audit_log  trace=0x1453c00  span=0x1453ca0  ID=da507931-8de6-4316-b3b3-b7f90b7999ea  Time="2023-09-27T13:16:30.787482Z"  UserID=b7b37cd0-714d-4e60-ba56-942e61ed86c0  OrganizationID=00000000-0000-0000-0000-000000000000  Ip=<nil>  UserAgent=""  ResourceType=workspace_build  ResourceID=35037564-6f96-417e-b391-6c5024abf9b5  ResourceTarget=""  Action=start  Diff="{\"template_version_id\":{\"Old\":\"\",\"New\":\"e9cfd83a-60f0-49c4-8422-2c676682eb65\",\"Secret\":false}}"  StatusCode=200  AdditionalFields="{\"workspace_name\":\"emon\",\"build_number\":\"1\",\"build_reason\":\"initiator\",\"workspace_owner\":\"\"}"  RequestID=a4eca8ae-d646-4c3c-a781-43bfe6600e5b  ResourceIcon=""  actor="&{ID:b7b37cd0-714d-4e60-ba56-942e61ed86c0 Email:ajju40959@gmail.com Username:emon}"
2023-09-27 13:17:21.716 [info]  coderd: audit_log  ID=5613eb6e-f9d5-46df-9507-dba85d4c4c31  Time="2023-09-27T13:17:21.714988Z"  UserID=b7b37cd0-714d-4e60-ba56-942e61ed86c0  OrganizationID=00000000-0000-0000-0000-000000000000  Ip=127.0.0.1  UserAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"  ResourceType=api_key  ResourceID=b7b37cd0-714d-4e60-ba56-942e61ed86c0  ResourceTarget=""  Action=login  Diff="{}"  StatusCode=201  AdditionalFields="{}"  RequestID=1fbcb647-a8fa-42f6-a012-7f0ca6734fc6  ResourceIcon=""  actor="&{ID:b7b37cd0-714d-4e60-ba56-942e61ed86c0 Email:ajju40959@gmail.com Username:emon}"
