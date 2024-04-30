import Loader from 'react-loader-spinner'

import {LoaderContainer} from './styledComponents'

const LoaderView = () => (
  <LoaderContainer data-testid="loader">
    <Loader type="ThreeDots" color="#0f0f0f" height="50" width="50" />
  </LoaderContainer>
)

export default LoaderView
