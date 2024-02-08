import styles from './style.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/interface';
import { useState } from 'react';
import { filterActions } from '@/store/filter-slice';
import PaperWrapper from '../paper';
import { sortValues } from '@/constants/filter';
import SearchInput from '../search';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';

export default function FilterContainer() {
  const dispatch = useAppDispatch();

  const brands = useAppSelector((state) => state.list.brands);
  const models = useAppSelector((state) => state.list.models);
  const filterParams = useAppSelector((state) => state.filter.filterParams);

  const [brandSearchTerm, setBrandSearchTerm] = useState('');
  const [modelSearchTerm, setModelSearchTerm] = useState('');

  // search filtered brands
  const filteredBrands = brands.filter((brand) => brand.toLowerCase().includes(brandSearchTerm.toLowerCase()));

  // search filtered models
  const filteredModels = models.filter((model) => model.toLowerCase().includes(modelSearchTerm.toLowerCase()));

  const handleChangeSortValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterActions.updateFilterParams({ ...filterParams, selectedSortParam: e.target.value }));
  };

  const handleChangeBrands = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBrand = e.target.name;
    const _brandList = [...filterParams.selectedBrands];

    if (_brandList.includes(newBrand)) {
      const updatedBrandList = _brandList.filter((item) => item !== newBrand);
      dispatch(filterActions.updateFilterParams({ ...filterParams, selectedBrands: updatedBrandList }));
    } else {
      _brandList.push(newBrand);
      dispatch(filterActions.updateFilterParams({ ...filterParams, selectedBrands: _brandList }));
    }
  };

  const handleChangeModels = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newModel = e.target.name;
    const _modelList = [...filterParams.selectedModels];

    if (_modelList.includes(newModel)) {
      const updatedModelList = _modelList.filter((item) => item !== newModel);
      dispatch(filterActions.updateFilterParams({ ...filterParams, selectedModels: updatedModelList }));
    } else {
      _modelList.push(newModel);
      dispatch(filterActions.updateFilterParams({ ...filterParams, selectedModels: _modelList }));
    }
  };

  return (
    <div className={styles.filterContainer}>
      <PaperWrapper label={'Sort By'} externalClass={styles.sorts}>
        <div className={styles.paperContent}>
          <RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue='female' name='radio-buttons-group' onChange={handleChangeSortValue}>
            {sortValues.map((item) => (
              <FormControlLabel key={item.name} value={item.name} control={<Radio disableRipple className={styles.radioButtons} />} label={item.name} />
            ))}
          </RadioGroup>
        </div>
      </PaperWrapper>
      <PaperWrapper label={'Brands'} externalClass={styles.brands}>
        <SearchInput onChange={(e) => setBrandSearchTerm(e.target.value)} externalClass={styles.searchBar} />{' '}
        {filteredBrands.length === 0 ? (
          <div className={styles.spinner}>
            <CircularProgress />
          </div>
        ) : (
          <div className={styles.paperContent}>
            <FormGroup>
              {filteredBrands.map((item, index) => (
                <FormControlLabel key={index} control={<Checkbox disableRipple className={styles.checkbox} name={item} onChange={handleChangeBrands} />} label={item} />
              ))}
            </FormGroup>
          </div>
        )}
      </PaperWrapper>
      <PaperWrapper label={'Model'} externalClass={styles.models}>
        <SearchInput onChange={(e) => setModelSearchTerm(e.target.value)} externalClass={styles.searchBar} />
        {filteredModels.length === 0 ? (
          <div className={styles.spinner}>
            <CircularProgress />
          </div>
        ) : (
          <div className={styles.paperContent}>
            <FormGroup>
              {filteredModels.map((item, index) => (
                <FormControlLabel key={index} control={<Checkbox disableRipple className={styles.checkbox} name={item} onChange={handleChangeModels} />} label={item} />
              ))}
            </FormGroup>
          </div>
        )}
      </PaperWrapper>
    </div>
  );
}
