import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import Logo from '../../assets/white-logo/logo.png';
import Info from '../../assets/info-icon/info.png';
import Profile from '../../assets/user-icon/user.png';
import Chat from '../../assets/chat-icon/chat.png';
import QrCode from '../../assets/qr-code/qr-code.png';

import * as S from './styles';

export default function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <S.Container>
      <S.NavigateOptionsContainer>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel || options.title || route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <S.NavigateOption
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              {label === 'Home' && (
                <S.IconImage source={Logo} isFocused={isFocused} />
              )}
              {label === 'Info Match' && (
                <S.IconImage source={Info} isFocused={isFocused} />
              )}
              {label === 'Profile' && (
                <S.IconImage source={Profile} isFocused={isFocused} />
              )}
              {label === 'List Matches' && (
                <S.IconImage source={Chat} isFocused={isFocused} />
              )}
              {label === 'Qr Code' && (
                <S.IconImage source={QrCode} isFocused={isFocused} />
              )}
            </S.NavigateOption>
          );
        })}
      </S.NavigateOptionsContainer>
    </S.Container>
  );
}
