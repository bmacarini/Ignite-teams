import { TouchableOpacityProps } from 'react-native';

import { Container, Title, FilterStyleProp } from './styles';

type Props = TouchableOpacityProps & FilterStyleProp & {
    title: string;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
    return (
        <Container 
        isActive={isActive}
        {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    );
}