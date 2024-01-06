import {memo} from 'react';
import {Flex, FlexProps} from '@/shared/ui/Stack/Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>
export const VStack = memo((props: VStackProps) => {

    const { align = 'start' } = props;
    return (
        //@ts-ignore
        <Flex {...props} direction={'column'} align={align}/>
    );
});
VStack.displayName = 'VStack';