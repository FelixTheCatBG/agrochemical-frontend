import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import GridItem from '../Grid/GridItem';
import GridContainer from '../Grid/GridContainer';
// core components


import tableStyle from "../../styles/views/tableStyles";
import { capitalize } from "../../utils/string";
import { buildParams } from "../../utils/queries";

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const sortItems = function (sortValue, items, isAscending) {
    if (!sortValue) {
        return items;
    }
    items.sort((a, b) => {
        const valueA = a[sortValue] || a.product[sortValue];
        const valueB = b[sortValue] || b.product[sortValue];
        const valueComparison = isAscending ? valueA > valueB : valueA < valueB;

        return valueComparison ? 1 : -1;
    });

    return items;
};

class CustomTable extends React.Component {
    constructor (props) {
        super(props);

        let sortField;
        const column = props.columns[props.defaultSortColumn];

        if (column) {
            if (!column.sort) {
                const column = props.columns.find(column => column.sort);

                if (column) {
                    sortField = column.sort;
                }
            } else {
                sortField = column.sort;
            }
        }

        this.state = {
            isAscending: true,
            originalItems: props.items,
            items: [...props.items],
            expandedItem: null,
            sortField,
            selectedFilters: {},
            filtersSubmited: false
        };
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        let nextState = {};

        if (nextProps.items !== prevState.originalItems) {
            const items = nextProps.remoteSort ? nextProps.items : sortItems(prevState.sortField, nextProps.items, prevState.isAscending);

            nextState = {
                items,
                ...nextProps.remoteSort && items
            };
        }

        return nextState;
    }

    renderTableHeadCell (column) {
        return (
            <TableCell
                onClick={column.sort && this.sort}
                data-sort-field={column.sort}
                className={column.sort ? this.props.classes.tableHeaderCellSort : this.props.classes.tableHeaderCell}
                key={column.headerName}
                colSpan={column.colSpan}
            >
                {column.headerName}
                {column.sort &&
                    <button className={`${this.props.classes.buttonSortWrapper} buttonSortWrapper`}>
                        <i className={(this.state.sortField && !this.state.isAscending) ? "fas fa-sort-up sorted" : "fas fa-sort-up arrowStyle"}></i>
                        <i className={(this.state.sortField && this.state.isAscending) ? "fas fa-sort-down sortedDown sortArrowStyle" : "fas fa-sort-down sortArrowStyle arrowStyle"}></i>
                    </button>
                }
            </TableCell>
        );
    }

    renderExpansionButton (item) {
        return (
            <TableCell className={this.props.classes.expandableCell} onClick={() => this.toggleExpansionPanel(item)}>
                <button className={this.props.classes.expandButton}>
                    <i class={this.state.expandedItem === item ? "fas fa-angle-up arrowUpIcon rotate" : "fas fa-angle-up arrowUpIcon"}></i>
                </button>
            </TableCell>
        );
    }

    toggleExpansionPanel = (item) => {
        this.setState({
            expandedItem: this.state.expandedItem === item ? null : item
        });
    }

    handleFilterChange = (e, filter, index) => {
        const options = this.props.filterOptions[index];
        let filters = { ...this.state.selectedFilters };
        const filterName = filter.alias || filter.name;

        if (typeof e === "string") {
            filters[filterName] = options.find(option => option.title === e);
        } else {
            filters[filterName] = options.find(option => option.value === e.target.value);
        }
        this.setState({
            selectedFilters: filters
        });
    }

    handleSubmit = () => {
        const filterParams = buildParams(this.state.selectedFilters);
        const sortParams = {
            sortBy: this.state.sortField,
            sortType: this.state.isAscending ? "asc" : "desc"
        };
        const params = { ...sortParams, ...filterParams };

        this.setState({
            filtersSubmited: true
        });
        this.props.onFetch(params);
    }

    sort = (event) => {
        const sortField = event ? event.currentTarget.dataset.sortField : this.state.sortBy;

        if (this.props.remoteSort) {
            const sortParams = {
                sortBy: sortField,
                sortType: this.state.isAscending ? "asc" : "desc"
            };

            if (this.state.filtersSubmited) {
                const filterParams = buildParams(this.state.selectedFilters);
                const params = { ...filterParams, ...sortParams };

                this.props.onFetch(params);
            } else {
                this.props.onFetch(sortParams);
            }
            this.setState({
                isAscending: !this.state.isAscending,
                sortField
            });
        } else {
            // eslint-disable-next-line no-undef
            const sortedItems = sortItems(sortField, this.state.items, this.state.isAscending);

            this.setState({
                isAscending: !this.state.isAscending,
                sortField,
                items: sortedItems
            });
        }
    }

    clearFilters = () => {
        if (this.state.filtersSubmited) {
            this.setState({
                selectedFilters: {},
                filtersSubmited: false
            });
            this.props.onFetch();
        }
    }

    renderFilter = (filter, index) => {
        const options = this.props.filterOptions[index];
        const filterName = filter.alias || filter.name;
        const selectedValue = this.state.selectedFilters[filterName];

        switch (filter.type) {
        case "select": {
            const selectedOptionIndex = selectedValue ? options.indexOf(selectedValue) : 0;

            return (
                <GridItem xs={12} sm={6} md={2}>
                    <FormControl className={this.props.classes.formControl} variant="outlined">
                        <Select
                            value={options[selectedOptionIndex].value}
                            onChange={e => this.handleFilterChange(e, filter, index)}
                            className={this.props.classes.downshiftSelect}
                            inputProps={{
                                name: filter.name,
                                id: 'outlined-age-simple',
                                height: '44',
                                placeholder: filter.name
                            }}
                        >
                            {options.map(option => <MenuItem value={option.value}>{capitalize(option.title)}</MenuItem>)}
                        </Select>
                    </FormControl>
                </GridItem>
            );
        }
        case "input": {
            return (
                <GridItem xs={12} sm={6} md={2}>
                    <div className={`${this.props.classes.filterContainer} inputFilter`}>
                        <input className="typeFilter" onChange={e => this.handleFilterChange(e, filter, index)} placeholder={filter.name} name={filter.name} value={this.state.selectedFilters[filterName].value}></input>
                    </div>
                </GridItem>
            );
        }

        default:
            break;
        }

        return null;
    }

    render () {
        const { expandable, hideHeader, columns, classes, filters } = this.props;

        return (
            <div className={classes.tableContainer}>
                {filters &&
                    <div className={classes.filtersContainer}>
                        <GridContainer>
                            <label className={classes.filterLabel}>Filters:</label>
                            {filters.map(this.renderFilter)}
                            <GridItem xs={6} sm={6} md={2}>
                                <div className={classes.filterButton}>
                                    <button onClick={this.clearFilters} className="productListButton clear">Clear</button>
                                </div>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={2}>
                                <div className={classes.filterButton}>
                                    <button onClick={this.handleSubmit} className="productListButton">Submit</button>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>}
                <Table className={classes.tableStyle}>
                    {!hideHeader &&
                        <TableHead>
                            <TableRow >
                                {expandable && <TableCell className={classes.expandableCell} />}
                                {columns.map((column) => {
                                    return (
                                        this.renderTableHeadCell(column)
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                    }
                    <TableBody>
                        {this.state.items.length > 0 ? this.state.items.map((item) => {
                            return (
                                <TableRow key={item.id} className={classes.tableRowStyle}>
                                    {expandable && this.renderExpansionButton(item)}
                                    {columns.map((column, index) => {
                                        let className = classes.tableCellStyle;

                                        if (expandable && index === 0) {
                                            className += ` ${classes.nextToExpandCell}`;
                                        }

                                        return (
                                            <TableCell
                                                className={className}
                                                key={column.headerName}
                                                colSpan={column.colSpan}
                                            >
                                                {column.renderCell(item, this.state.expandedItem === item)}
                                            </TableCell>

                                        );
                                    })}
                                </TableRow>
                            );
                        }) : <p className={classes.noItem}>{this.props.emptyMessage}</p>}

                    </TableBody>
                </Table>
            </div>
        );
    }
}

CustomTable.defaultProps = {
    defaultSortColumn: 0,
    remoteSort: false,
    columns: [],
    emptyMessage: "Nothing Found"
};

CustomTable.propTypes = {
    classes: PropTypes.object.isRequired,
    tableHeaderColor: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    items: PropTypes.array,
    expandable: PropTypes.bool,
    hideHeader: PropTypes.bool,
    filterData: PropTypes.func,
    filters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    })).isRequired,
    filterOptions: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.object.isRequired)
    })),
    remoteSort: PropTypes.bool,
    columns: PropTypes.arrayOf(PropTypes.shape({
        headerName: PropTypes.string,
        renderCell: PropTypes.func.isRequired,
        colSpan: PropTypes.number,
        sort: PropTypes.string

    })).isRequired
};
export default withStyles(tableStyle)(CustomTable);