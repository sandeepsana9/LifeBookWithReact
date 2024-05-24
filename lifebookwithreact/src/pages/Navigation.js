import { Outlet, Link } from "react-router-dom";
import "../css/Navigation.css"
function Navigation() {
    return (
        <>
            <nav>
                <ul className="text_transform_none list_style_type_none d_flex border_1_solid background_color_primary margin_0 padding_0 border_2_solid_white border_radius_10 box_shadow_4_4_8_white">
                    <li className="padding_20_0">
                        <Link to="/" className="text_decoration_none text_transform_none color_white padding_20_20">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="text_decoration_none text_transform_none">Blogs</Link>

                    </li>
                    <li>
                        <Link to="/contact" className="text_decoration_none text_transform_none">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation;