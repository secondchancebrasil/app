import {RootStackParamList} from '../../routes/StackParams/RootStackParamsList';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
