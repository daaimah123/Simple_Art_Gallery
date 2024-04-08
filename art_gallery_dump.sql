--
-- PostgreSQL database dump
--

-- Dumped from database version 14.11 (Homebrew)
-- Dumped by pg_dump version 14.11 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: gallery_items; Type: TABLE; Schema: public; Owner: daaimahtibrey
--

CREATE TABLE public.gallery_items (
    id integer NOT NULL,
    path character varying(1024) NOT NULL,
    description character varying(1024) NOT NULL,
    show_desc boolean DEFAULT false,
    likes integer DEFAULT 0,
    artist character varying(1024) NOT NULL
);


ALTER TABLE public.gallery_items OWNER TO daaimahtibrey;

--
-- Name: gallery_items_id_seq; Type: SEQUENCE; Schema: public; Owner: daaimahtibrey
--

CREATE SEQUENCE public.gallery_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gallery_items_id_seq OWNER TO daaimahtibrey;

--
-- Name: gallery_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daaimahtibrey
--

ALTER SEQUENCE public.gallery_items_id_seq OWNED BY public.gallery_items.id;


--
-- Name: gallery_items id; Type: DEFAULT; Schema: public; Owner: daaimahtibrey
--

ALTER TABLE ONLY public.gallery_items ALTER COLUMN id SET DEFAULT nextval('public.gallery_items_id_seq'::regclass);


--
-- Data for Name: gallery_items; Type: TABLE DATA; Schema: public; Owner: daaimahtibrey
--

INSERT INTO public.gallery_items (id, path, description, show_desc, likes, artist) VALUES (1, 'images/gold_streets.jpg', 'The painting depicts a colorful and bustling street scene, likely inspired by her travels around the world. Abad often incorporated elements of her Filipino heritage and global experiences into her art, and this piece is no exception. Through bold colors and energetic brushstrokes, she captures the dynamism and diversity of urban life, challenging the romanticized notion of prosperity and opportunity often associated with city streets. Instead, the title suggests a disillusionment or realization that the reality of urban living may not match ones expectations or dreams. Her work invites viewers to reflect on the complexities of urban existence and the disparity between perception and reality.', false, 1, 'Pacita_Abad');
INSERT INTO public.gallery_items (id, path, description, show_desc, likes, artist) VALUES (2, 'images/the_sugar_shack.jpg', 'Elongated Black figures fill a dance hall to the brim, moving soulfully to the silent rhythm. All of the characters, vivacious women and men all stylishly dressed, dance with their eyes closed. While its core memory was taken from Barnes’s childhood in the South, the image has come to exemplify the immersive and energetic experience of Black culture.', false, 0, 'Ernie_Barnes');
INSERT INTO public.gallery_items (id, path, description, show_desc, likes, artist) VALUES (3, 'images/the-two-fridas.jpg', 'This portrait shows the two different personalities of Frida. One is the traditional Frida in Tehuana costume, with a broken heart, sitting next to an independent, modern dressed Frida. In her diary, she wrote about this painting and said it is originated from her memory of an imaginary childhood friend. Later she admitted it expressed her desperation and loneliness with the separation from Diego Rivera. In this painting, the two Fridas are holding hands. They both have visible hearts and the heart of the traditional Frida is cut and torn open. The main artery, which comes from the torn heart down to the right hand of the traditional Frida, is cut off by the surgical pincers held in the lap of the traditional Frida. The blood keeps dripping on her white dress and she is in danger of bleeding to death. The stormy sky filled with agitated clouds may reflect Fridas inner turmoil.', false, 1, 'Frida Khalo');
INSERT INTO public.gallery_items (id, path, description, show_desc, likes, artist) VALUES (4, 'images/great_wave.jpg', 'The composition of the print is striking, with the wave dominating the foreground, rendered in a vivid blue color that contrasts with the white foam and the darker hues of the boats and sky. Mount Fuji is visible in the background, serene and distant, providing a sense of scale and contrast to the turbulent sea. The wave itself is depicted with dynamic lines and forms, capturing the motion and energy of the water.', false, 0, 'Katsushika Hokusai');


--
-- Name: gallery_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daaimahtibrey
--

SELECT pg_catalog.setval('public.gallery_items_id_seq', 4, true);


--
-- Name: gallery_items gallery_items_pkey; Type: CONSTRAINT; Schema: public; Owner: daaimahtibrey
--

ALTER TABLE ONLY public.gallery_items
    ADD CONSTRAINT gallery_items_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

