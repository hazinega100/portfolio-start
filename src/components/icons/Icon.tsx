import React from "react";
import iconSprite from "../../assets/images/icons/icons-sprite.svg"

type PropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: React.FC<PropsType> = ({
                                              iconId,
                                              width,
                                              height,
                                              viewBox
                                          }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${iconId}`}/>
        </svg>
    );
};
