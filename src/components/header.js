import PropTypes from "prop-types"
import React from "react"
import { AppBar, Toolbar, Typography, Hidden, IconButton } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ siteTitle }) => (
    <>
    <Hidden smUp>
      <IconButton style={{position: "absolute"}}>
        <MenuIcon />
      </IconButton>
    </Hidden>
    <Hidden xsDown>
      <AppBar color='primary'>
        <Toolbar>
          <Typography>
            {siteTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </Hidden>
    </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
