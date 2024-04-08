CREATE TABLE gallery_items
(id SERIAL PRIMARY KEY, 
 path VARCHAR(1024) NOT NULL, 
 description VARCHAR(1024) NOT NULL,
 show_desc BOOLEAN DEFAULT FALSE, 
 likes INT DEFAULT 0
 artist VARCHAR(1024) NOT NULL,
);

INSERT INTO 'gallery_items' 
("path", "description", "likes", "artist") 
VALUES ('images/gold_streets.jpg', 'The painting depicts a colorful and bustling street scene, likely inspired by her travels around the world. Abad often incorporated elements of her Filipino heritage and global experiences into her art, and this piece is no exception. Through bold colors and energetic brushstrokes, she captures the dynamism and diversity of urban life, challenging the romanticized notion of prosperity and opportunity often associated with city streets. Instead, the title suggests a disillusionment or realization that the reality of urban living may not match ones expectations or dreams. Her work invites viewers to reflect on the complexities of urban existence and the disparity between perception and reality.', 1, 'Pacita_Abad'),
       ('images/the_sugar_shack.jpg', 'Elongated Black figures fill a dance hall to the brim, moving soulfully to the silent rhythm. All of the characters, vivacious women and men all stylishly dressed, dance with their eyes closed. While its core memory was taken from Barnes’s childhood in the South, the image has come to exemplify the immersive and energetic experience of Black culture.', 0, 'Ernie_Barnes'), 
       ('images/the-two-fridas.jpg', 'This portrait shows the two different personalities of Frida. One is the traditional Frida in Tehuana costume, with a broken heart, sitting next to an independent, modern dressed Frida. In her diary, she wrote about this painting and said it is originated from her memory of an imaginary childhood friend. Later she admitted it expressed her desperation and loneliness with the separation from Diego Rivera. In this painting, the two Fridas are holding hands. They both have visible hearts and the heart of the traditional Frida is cut and torn open. The main artery, which comes from the torn heart down to the right hand of the traditional Frida, is cut off by the surgical pincers held in the lap of the traditional Frida. The blood keeps dripping on her white dress and she is in danger of bleeding to death. The stormy sky filled with agitated clouds may reflect Fridas inner turmoil.', 1, 'Frida Khalo'),
       ('images/great_wave.jpg', 'The composition of the print is striking, with the wave dominating the foreground, rendered in a vivid blue color that contrasts with the white foam and the darker hues of the boats and sky. Mount Fuji is visible in the background, serene and distant, providing a sense of scale and contrast to the turbulent sea. The wave itself is depicted with dynamic lines and forms, capturing the motion and energy of the water.', 0, 'Katsushika Hokusai');

