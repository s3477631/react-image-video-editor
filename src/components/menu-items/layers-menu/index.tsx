import React from 'react';
import './layers-menu.css';
import {SubMenuItems, useMenuStore} from '../../../hooks/useMenuStore';
import {LayerGallerySelector} from '../layer-gallery-selector';

export const LayersMenu = () => {
    const expanded = useMenuStore(state => state.subMenu);
    return (
        <>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"/></svg>
            <div className={expanded === SubMenuItems.layerMenu ? 'showTextInput' : 'hideTextInput'}>
               <LayerGallerySelector/>
            </div>
        </div>
        </>
    )
}
