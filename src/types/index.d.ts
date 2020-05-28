/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import * as React from "react";


export interface YwnContextProps {
  navigation?: any;
  route?: any;
  screens?: string[];
  folder?: string;
  debug?: boolean;
  children: React.ReactNode;
}


/** 
Ywn.YwnContext
*/
export class YwnContext extends React.Component<YwnContextProps, any> { }