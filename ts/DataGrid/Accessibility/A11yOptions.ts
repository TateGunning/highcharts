/* *
 *
 *  DataGrid options
 *
 *  (c) 2020-2024 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Dawid Dragula
 *  - Sebastian Bochan
 *
 * */

/* *
 *
 *  Imports
 *
 * */


/* *
 *
 *  Declarations
 *
 * */

namespace A11yOptions {

    export interface GeneralA11yOptions {
        enabled?: boolean;
        description?: string;
        cellEditing?: CellEditingA11yOptions;
        sorting?: SortingA11yOptions;
    }

    export interface CellEditingA11yOptions {
        description?: string;
        startEdit?: string;
        afterEdit?: string;
        cancelEdit?: string;
    }

    export interface SortingA11yOptions {
        description?: string;
        ascending?: string;
        descending?: string;
        none?: string;
    }

    export interface HeaderCellA11yOptions {
        description?: string;
    }

}


/* *
 *
 *  Default Export
 *
 * */

export default A11yOptions;
