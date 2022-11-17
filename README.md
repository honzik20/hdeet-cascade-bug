# Using the HTA hugo environment with Vagrant

Vagrant will create and maintain a small virtual machine containing all necessary bits and pieces and the definition will automatically start a hugo server.

The VM is considered disposable, can be recreated within a few short moments and can be easily deleted after use (and it's very small).

In the VM there is a running hugo-live server. A synchronization mechanism will sync your content every 5 seconds into the VM for hugo to pick it up.

## Requirements

To be able to use the shortcuts in this document, you need [Vagrant](https://www.vagrantup.com/). Vagrant in turn needs a virtualization environment ([Virtualbox](https://www.virtualbox.org/) by default) to work.

## Start VM

1. Put your CLI User for HTA Hub into `.hubrc`. You can use/rename the included sample file. **Do not commit or share your personal `.hubrc`.**

1. To start/create your VM, run `vagrant up`.
   On the first start, hugo will ask for a local plugin install (hugo exec). Confirm it and re-run `vagrant up`.

1. After vagrant has brought up your VM, your hugo live server should already be available on <http://localhost:1313>

## Stop VM

`vagrant halt` will shut down your VM. `vagrant up` will then boot it up again.

`vagrant destroy` will completely delete your VM.

`vagrant reload --provision` will reboot the VM and apply any changes to the configuration.

## Generate offline directory

`vagrant exec hugo` will generate an offline version of your hugo site, analog to what is generated for actual site containers. You can find the results in the `public` directory.

## Configuration

`Vagrantfile` contains all important information about your VM. The most important thing is the version of the htahugo image that contains all the HTA themed template assets. You can find the image name in the `config.vm.provision` block. Please keep your environment current and always use the latest version of the template.

`syncfile` is used by the internal synchronization process. Any file or directory that shows up in the syncfile will be synced into the container and updated for hugo. The file is already populated with the most important items.

## Troubleshooting

If you suspect problems with the live server, you can get logs from the running hugo server with `vagrant ssh -c 'docker logs htahugo'`. Add `-f` to follow the log stream.
