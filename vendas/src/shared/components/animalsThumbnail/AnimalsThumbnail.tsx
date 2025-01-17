import { useNavigation } from "@react-navigation/native";
import { AnimalNavigationProp } from "../../../modules/detail/screens/detail";
import { MenuUrl } from "../../enums/MenuUrl.enum";
import { AnimalType } from "../../types/AnimalType";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";

import { AnimalImage, AnimalsThumbnailContainer } from "./animalsThumbnail.style";

interface AnimalThumbailProps {
    animal: AnimalType;
}

const AnimalsThumbail = ({ animal }: AnimalThumbailProps) => {
    const { navigate } = useNavigation<AnimalNavigationProp>();

    const handGoToDetail = () => {
        navigate(MenuUrl.DETAIL, {
            animal,
        });
    };

    const modifiedImageUrl = animal.image && animal.image.replace("localhost", "10.0.2.2");
    return (

        <AnimalsThumbnailContainer onPress={handGoToDetail}>
            {animal.image && modifiedImageUrl.startsWith('http') ? (
                <AnimalImage source={{ uri: modifiedImageUrl }} />
            ) : (
                <AnimalImage source={require("../../../assets/images/Pug.png")} />
            )}


            <Text type={textTypes.PARAGRAPH_BOLD}>{animal.name}</Text>
            <Text type={textTypes.PARAGRAPH_SEMI_BOLD}>{animal.gender}</Text>
        </AnimalsThumbnailContainer>

    );
};

export default AnimalsThumbail;