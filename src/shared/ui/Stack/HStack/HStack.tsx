import {memo} from 'react';
import {Flex, FlexProps} from "shared/ui/Stack/Flex/Flex";

type HStackProps = Omit<FlexProps, 'direction'>
export const HStack = memo((props: HStackProps) => {

    return (
        //@ts-ignore
        <Flex {...props} direction={'row'}/>
    );
});
HStack.displayName = 'HStack'