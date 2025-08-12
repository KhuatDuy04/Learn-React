import { Menu, MenuItem, ProSidebar, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from "react-pro-sidebar";
import { FaTachometerAlt, FaGithub, FaIndent, FaReact } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <ProSidebar>
            <SidebarHeader>
                <div style={{
                    padding: '24px',
                    fontWeight: 'bold',
                    fontSize: 14,
                    textAlign: 'center'
                }}>
                    <FaReact size={'3em'} color={"00bfff"} className={'me-3'}/>
                    My Sidebar
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt />}>Dashboard <Link to={'/admins'}/></MenuItem>
                </Menu>

                <Menu iconShape="circle">
                    <SubMenu title="Features" icon={<FaIndent />}>
                        <MenuItem>Quản lý Users <Link to={'/admins/manage-users'}/> </MenuItem>
                        <MenuItem>Quản lý Bài Quiz</MenuItem>
                        <MenuItem>Quản lý câu hỏi</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div style={{ padding: '20px' }}>
                    <a href="https://github.com/azouaoui-med/react-pro-sidebar" target="_blank" rel="noopener noreferrer">
                        <FaGithub /> View Source
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideBar;
