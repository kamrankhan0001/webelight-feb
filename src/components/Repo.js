// Importing necessary dependencies and Material-UI components.
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  withStyles,
  Typography,
  ButtonBase,
  Paper,
  Grid,
  Chip,
  Link
} from "@material-ui/core";

// Styles definition for the component using Material-UI's withStyles.
const styles = (theme) => ({
  // Styling for the root container of the component.
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
    border: "1px solid black",
    borderRadius: "10px",
    width: "75%",
    margin: "16px auto"
  },
  // Styling for the Paper component that wraps the content.
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    width: "100%"
  },
  // Styling for the image container.
  image: {
    width: 128,
    height: 128
  },
  // Styling for the image itself.
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  // Styling for the Chip component.
  chip: {
    margin: theme.spacing.unit
  },
  // Styling for links.
  link: {
    margin: theme.spacing.unit
  }
});

// Functional component named 'Repo' receiving props and classes from withStyles.
const Repo = ({
  classes,
  avatar_url,
  name,
  html_url,
  owner,
  description,
  stargazers_count,
  open_issues_count,
  created_at
}) => {
  // JSX structure for rendering the component.
  return (
    <div style={{ width: "100%" }}>
      {/* Paper component for styling and organizing the content. */}
      <Paper className={classes.paper}>
        {/* Grid container for layout using Material-UI's Grid system. */}
        <Grid container spacing={7}>
          {/* Grid item for the owner's avatar. */}
          <Grid item>
            {/* ButtonBase for making the owner's avatar clickable. */}
            <ButtonBase className={classes.image}>
              {/* Linking the avatar to the owner's GitHub profile. */}
              <a
                href={`https://github.com/${owner}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Owner's avatar image. */}
                <img
                  className={classes.img}
                  alt="Owner Avatar"
                  src={avatar_url}
                />
              </a>
            </ButtonBase>
          </Grid>
          {/* Grid item for other details about the repository. */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={24}>
              <Grid item xs>
                {/* Typography for the repository name, linking to the GitHub repository. */}
                <Typography gutterBottom variant="h3">
                  <Link
                    href={html_url}
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    className={classes.link}
                  >
                    {name}
                  </Link>
                </Typography>
                {/* Typography for repository description. */}
                <Typography gutterBottom variant="headline">
                  {description}
                </Typography>
                {/* Container for displaying stars, issues, and submission information. */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    justifyContent: "flex-start"
                  }}
                >
                  {/* Container for displaying stars and issues as Chip components. */}
                  <div>
                    <Chip
                      label={`Stars: ${stargazers_count}`}
                      className={classes.chip}
                      clickable
                      variant="outlined"
                    />
                    <Chip
                      label={`Issues: ${open_issues_count}`}
                      className={classes.chip}
                      clickable
                      variant="outlined"
                    />
                  </div>
                  {/* Typography for displaying submission information and owner's name. */}
                  <Typography color="primary" inline>
                    Submitted {moment(created_at).fromNow()} By {owner}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {/* Uncomment the next line if you want to include the 'Activities' component. */}
      {/* <Activities /> */}
    </div>
  );
};

// PropTypes to enforce the type of 'classes' prop.
Repo.propTypes = {
  classes: PropTypes.object.isRequired
};

// Exporting the component after styling it with withStyles.
export default withStyles(styles)(Repo);
