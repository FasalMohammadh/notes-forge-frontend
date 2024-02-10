import { useBoolean } from "ahooks";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoggedUserMenu from "./components/logged-user-menu";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import type {
  SvgIconProps,
  TooltipProps,
  IconButtonProps,
} from "@mui/material";

import { TreeItem, type TreeItemProps } from "@mui/x-tree-view/TreeItem";
import { TreeView } from "@mui/x-tree-view/TreeView";

import FolderIcon from "@mui/icons-material/Folder";
import TopicIcon from "@mui/icons-material/Topic";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LayersIcon from "@mui/icons-material/Layers";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { forwardRef } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import useResponsive from "@/hooks/use-md";

interface SidebarActionProps {
  tooltipProps?: Omit<TooltipProps, "title">;
  iconButtonProps?: Omit<IconButtonProps, "onClick" | "disabled">;
  iconProps?: SvgIconProps;
  title: string;
  icon: React.ElementType<SvgIconProps>;
  onClick?: IconButtonProps["onClick"];
  disabled?: IconButtonProps["disabled"];
}
function SidebarAction(props: Readonly<SidebarActionProps>) {
  const Icon = props.icon;

  return (
    <>
      <ListItemButton
        component={Button}
        startIcon={<Icon className="text-inherit" />}
        variant="text"
        className="sm:hidden text-neutral-500"
      >
        {props.title}
      </ListItemButton>

      <Tooltip
        className="hidden sm:block"
        title={props.title}
        {...props.tooltipProps}
      >
        <IconButton
          size="small"
          disabled={props.disabled}
          onClick={props.onClick}
          {...props.iconButtonProps}
        >
          <Icon fontSize="small" {...props.iconProps} />
        </IconButton>
      </Tooltip>
    </>
  );
}

function Layout() {
  const [mobileOpen, { set: setMobileOpen }] = useBoolean(false);
  const [isClosing, { set: setIsClosing }] = useBoolean(false);

  const { sm } = useResponsive();

  const navigate = useNavigate();

  function handleDrawerClose() {
    setIsClosing(true);
    setMobileOpen(false);
  }

  function handleDrawerTransitionEnd() {
    setIsClosing(false);
  }

  function handleDrawerToggle() {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  }

  function handleClickNote(folderId: string, noteId: string) {
    navigate(`/${folderId}/${noteId}`, { preventScrollReset: true });
  }

  const drawer = (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItemButton>
        </ListItem>
      </List>

      <div className="sm:flex sm:flex-col-reverse">
        <Divider className="sm:hidden">
          <Chip label="Actions" size="small" />
        </Divider>
        <Box className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-end">
          <SidebarAction title="Create Folder" icon={CreateNewFolderIcon} />
          <SidebarAction title="Create Note" icon={NoteAddIcon} />
        </Box>

        <Divider>
          <Chip label="Folders" size="small" />
        </Divider>
      </div>

      <TreeView
        aria-label="files"
        className="py-2"
        defaultExpanded={["3"]}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
        sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        <StyledTreeItem nodeId="1" labelIcon={FolderIcon} labelText="ABI">
          <StyledTreeItem
            nodeId="2"
            labelIcon={TopicIcon}
            labelText="Maths"
            onClick={() => handleClickNote("afda", "asdfsad")}
          />
        </StyledTreeItem>
      </TreeView>
    </div>
  );

  return (
    <>
      <AppBar elevation={0} className="sticky top-0 z-20">
        <Toolbar className="bg-transparent">
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className="mr-2 block sm:hidden text-inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
          <div className="ml-auto">
            <LoggedUserMenu />
          </div>
        </Toolbar>
      </AppBar>
      <Box className="flex">
        <nav className="shrink-0 sm:w-[280px]">
          {sm ? (
            <Drawer
              open
              variant="permanent"
              PaperProps={{ className: "w-[280px] z-0" }}
            >
              <Toolbar />
              {drawer}
            </Drawer>
          ) : (
            <Drawer
              disablePortal
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
              ModalProps={{ keepMounted: true }}
              PaperProps={{ className: "w-[280px]" }}
            >
              {drawer}
            </Drawer>
          )}
        </nav>
        <main className="flex-1 p-3 w-[calc(100%_-_280px)]">
          <Outlet />
        </main>
      </Box>
    </>
  );
}

type StyledTreeItemProps = TreeItemProps & {
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const StyledTreeItem = forwardRef(
  (props: StyledTreeItemProps, ref: React.Ref<HTMLLIElement>) => {
    const { labelIcon: LabelIcon, labelInfo, labelText, ...rest } = props;

    return (
      <TreeItem
        ContentProps={{ className: "py-2 group" }}
        label={
          <Box className="flex items-center p-0.5 pr-0">
            <Box component={LabelIcon} className="mr-2 text-neutral-500" />
            <Typography
              variant="body2"
              className="[font-weight:inherit] flex-grow"
            >
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
            <div className="flex gap-1 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              <IconButton size="small">
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          </Box>
        }
        {...rest}
        ref={ref}
      />
    );
  }
);

export default Layout;
