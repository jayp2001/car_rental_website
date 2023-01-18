import "./pageFooter.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function PageFooter() {
  return (
    <div className="grid grid-cols-12 footer">
      <div className="col-span-5 footerWrapper">
        <div className="footerHeader">Rent Vroom</div>
        <div className="footerContaintHeader">Rentvroom Pvt. Ltd.</div>
        <div className="footerContaint">
          No: 296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla Bengaluru,
          Karnataka 560034
        </div>
        <div className="grid grid-cols-12 socialMediaPageIconWrapper">
          <div className="col-span-1">
            <TwitterIcon />
          </div>
          <div className="col-span-1">
            <InstagramIcon />
          </div>
          <div className="col-span-1">
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
