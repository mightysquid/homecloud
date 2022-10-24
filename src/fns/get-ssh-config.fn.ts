import { SSHConfigBlock } from 'src/types/ssh-config-block.type';
import sshParser from 'ssh-config';


export function getSSHConfig(){
    const homedir = os.homedir();
    const sshConfig = fs.readFileSync(path.join(homedir , '.ssh' , 'config') , {encoding: 'utf-8'});
    const result = sshParser.parse(sshConfig)
    return result as unknown as SSHConfigBlock;
}