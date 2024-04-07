// import './Footer.css'
import CallSvgIcon from '../../assets/icons/CallSvgIcon';
import MailSvgIcon from '../../assets/icons/MailSvgIcon';
import GitHubSvgIcon from '../../assets/icons/GitHubSvgIcon';
import LinkedInSvgIcon from '../../assets/icons/LinkedInSvgIcon';
import InstagramSvgIcon from '../../assets/icons/InstagramSvgIcon';
import TwitterSvgIcon from '../../assets/icons/TwitterSvgIcon';
import DiscordSvgIcon from '../../assets/icons/DiscordSvgIcon';

const Footer = () => {
   return (
      <footer>
         <div id='footer'>
            <CallSvgIcon />
            <MailSvgIcon />
            <GitHubSvgIcon />
            <LinkedInSvgIcon />
            <TwitterSvgIcon />
            <InstagramSvgIcon />
            <DiscordSvgIcon />
         </div>
      </footer>
   );
}
 
export default Footer;