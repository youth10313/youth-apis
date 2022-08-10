import { Pagination } from "../../../../@types/common";
import { Podcast } from "../../../../@types/podcast";
import { Track } from "../../../../@types/track";
import { DATA_API } from "../../../../constant/api";
import { EntityRequest } from "../../../../models/entity-request";

const Module1 = new EntityRequest<Track, any, Pagination<Track>>(DATA_API + 'tracks');
const Module2 = new EntityRequest<Podcast, any, Pagination<Podcast>>(DATA_API + 'podcasts');

const Tracks = Module1.Functions()
const Podcasts = Module2.Functions()

const Musics = {
    Tracks,
    Podcasts
}
export default Musics;