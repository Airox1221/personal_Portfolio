// Copyright 2025 Haridev
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  classes= '',
  icon,}) => {
  if(href){
    return(
      <a
        href={href}
        target = {target}
        className={'btn btn-primary '+ classes}
      >
        {label}

        {icon?
          <span className="material-icons-round">
            {icon}
          </span>
          :undefined
        }
      </a>
    )
  } else{
    return(
      <button className={'btn btn-primary '+ classes}>
        {label}
        {icon?
          <span className="material-icons-round">
            {icon}
          </span>
          :undefined
        }
      </button>
    )
  }
}
ButtonPrimary.propTypes = {
  label : PropTypes.string.isRequired,
  href : PropTypes.string,
  target : PropTypes.string,
  classes : PropTypes.string,
  icon : PropTypes.string
}


const ButtonOutline = ({
  href,
  target = "_self",
  label,
  classes= '',
  icon,}) => {
  if(href){
    return(
      <a
        href={href}
        target = {target}
        className={'btn btn-outline '+ classes}
      >
        {label}

        {icon?
          <span className="material-icons-round">
            {icon}
          </span>
          :undefined
        }
      </a>
    )
  } else{
    return(
      <button className={'btn btn-outline '+ classes}>
        {label}
        {icon?
          <span className="material-icons-round">
            {icon}
          </span>
          :undefined
        }
      </button>
    )
  }
}
ButtonOutline.propTypes = {
  label : PropTypes.string.isRequired,
  href : PropTypes.string,
  target : PropTypes.string,
  classes : PropTypes.string,
  icon : PropTypes.string
}



export { 
  ButtonPrimary,
  ButtonOutline
}