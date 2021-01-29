import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField, SelectMultiField } from '../../FormFields';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { department_data } from './StaticData'
import { selectBUList } from '../../../../../redux/config_bu/config_bu.selector';
import { selectDeptList } from '../../../../../redux/config_dept/config_dept.selector';
import { fetchBUStart } from '../../../../../redux/config_bu/config_bu.actions';
import { fetchDEPTStart } from '../../../../../redux/config_dept/config_dept.actions';
import { fetchDIVStart } from '../../../../../redux/config_div/config_div.actions';
import { selectDivisionList } from '../../../../../redux/config_div/config_div.selector';
import { fetchRegionStart } from '../../../../../redux/config/config.actions';
import { selectRegionList } from '../../../../../redux/config/config.selector';
import { fetchSITESStart } from '../../../../../redux/config_sites/config_sites.actions';
import { selectSitesList } from '../../../../../redux/config_sites/config_sites.selector';



const cities = [
    {
        value: undefined,
        label: 'None'
    },
    {
        value: '1',
        label: 'Melbourne'
    },
    {
        value: '2',
        label: 'Sydney'
    },
    {
        value: '3',
        label: 'Perth'
    },
    {
        value: '3',
        label: 'Brisbane'
    },
    {
        value: '3',
        label: 'Gold Coast'
    }
];

const states = [
    {
        value: undefined,
        label: 'None'
    },
    {
        value: '11',
        label: 'Victoria'
    },
    {
        value: '22',
        label: 'NSW'
    },
    {
        value: '33',
        label: 'South Australia'
    },
    {
        value: '33',
        label: 'Northern Territory'
    }
    ,
    {
        value: '33',
        label: 'Queensland'
    },
    {
        value: '33',
        label: 'Western Australia'
    },
    {
        value: '33',
        label: 'Tasmania'
    }
];

const countries = [
    {
        value: null,
        label: 'None'
    },
    {
        value: '111',
        label: 'United States'
    },
    {
        value: '222',
        label: 'Australia'
    },

];

const names = [
    {id: 1, name: "Oliver Hansen"},
    {id: 2, name: "Van Henry"},
    {id: 3, name: "Ralph Hubbard"},
    {id: 4, name: "Omar Alexander"},
    {id: 5, name: "Carlos Abbott"},
    {id: 6, name: "Miriam Wagner"},
    {id: 7, name: "Bradley Wilkerson"},
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function BuyerForm(props) {
    const dispatch = useDispatch()
    const buData = useSelector(state => selectBUList(state))
    const deptData = useSelector(state => selectDeptList(state))
    const divData = useSelector(state => selectDivisionList(state))
    const regData = useSelector(state => selectRegionList(state))
    const siteData = useSelector(state => selectSitesList(state))

    useEffect(() => {
        dispatch(fetchBUStart())
        dispatch(fetchDEPTStart())
        dispatch(fetchDIVStart())
        dispatch(fetchRegionStart())
        dispatch(fetchSITESStart())
  }, [])


    console.log(deptData)
    const {
        formField: {
            department,
            business_unit,
            divisions,
            regions,
            category1,
            category2,
            category3,
            site,
        }
    } = props;
    return (
        <React.Fragment>
            <Grid container alignItems="center" style={{ marginBottom: "0.7em" }}>
                <Grid item style={{ marginRight: "0.5em" }}>
                    <SupervisedUserCircleIcon fontSize='large' />
                </Grid>
                <Grid item>
                    <Typography
                        variant="h6"
                        style={{ fontSize: "1.5em", fontWeight: "bolder" }}
                    >
                        Applicable For
          </Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={department.name}
                        label={department.label}
                        data={deptData}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={business_unit.name}
                        label={business_unit.label}
                        data={buData}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={divisions.name}
                        label={divisions.label}
                        data={divData}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={regions.name}
                        label={regions.label}
                        data={regData}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={category1.name}
                        label={category1.label}
                        data={names}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={category2.name}
                        label={category2.label}
                        data={names}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={category3.name}
                        label={category3.label}
                        data={names}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectMultiField
                        name={site.name}
                        label={site.label}
                        data={siteData}
                        fullWidth
                    />
                </Grid>


            </Grid>
        </React.Fragment>
    );
}
