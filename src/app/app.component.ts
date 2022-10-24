import { Component } from '@angular/core';
import { getSSHConfig } from 'src/fns/get-ssh-config.fn';
import { scan } from 'src/fns/scan.fn';
import { SSHConfigBlock } from 'src/types/ssh-config-block.type';
import sshParser from 'ssh-config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sshFile: SSHConfigBlock;
  sshConfig: {host: string , identityFilePath: string | undefined , port: string | undefined , user: string | undefined, hostname: string | undefined}[];

  constructor(){
    this.sshFile = getSSHConfig();
    console.log(this.sshFile)
    this.sshConfig = this.sshFile.map(val => {
      return {
        host: val.value,
        identityFilePath: val.config.find(item => item.param === 'IdentityFile')?.value,
        port: val.config.find(item => item.param === 'Port')?.value,
        user: val.config.find(item => item.param === 'User')?.value,
        hostname: val.config.find(item => item.param === 'HostName')?.value
      }
    })
    console.log()
    // getSSHConfig().map(item => {alias: item.type})
  }

  onClickAddVps(){
    alert('should open form to create a new vps')
  }
}
