import React, { useState } from "react";
import { Carousel, Form, Input, Button, InputNumber } from "antd";

export default function App() {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTracks = async (values) => {
        const { searchTerm, limit } = values;
        const baseURL = "https://www.apitutor.org/spotify/simple/v1/search";
        const url = `${baseURL}?q=${searchTerm}&type=track&limit=${limit}`;
        setLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setTracks(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const renderTrack = (track) => (
        <div key={track.id} style={{ textAlign: "center" }}>
            <iframe
                src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={track.name}
            ></iframe>
            <h3>{track.name}</h3>
            <p>{track.artist.name}</p>
        </div>
    );

    return (
        <>
            <header>
                <h1 style={{ textAlign: "center" }}>Spotify Song Search</h1>
            </header>
            <main>
                <div style={{ maxWidth: "640px", margin: "20px auto" }}>
                    <Form
                        layout="vertical"
                        onFinish={fetchTracks}
                        style={{
                            padding: "20px",
                            border: "1px solid #000",
                            borderRadius: "8px",
                        }}
                    >
                        <Form.Item
                            label="Search Term"
                            name="searchTerm"
                            rules={[{ required: true, message: "Please enter a search term!" }]}
                        >
                            <Input placeholder="e.g., Beyoncé" />
                        </Form.Item>
                        <Form.Item
                            label="Number of Songs"
                            name="limit"
                            rules={[{ required: true, message: "Please enter a number!" }]}
                        >
                            <InputNumber
                                min={1}
                                max={20}
                                style={{ width: "100%" }}
                                placeholder="Max 20"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading}
                            >
                                Search
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                {tracks.length > 0 && (
                    <div style={{ maxWidth: "640px", margin: "20px auto" }}>
                        <Carousel autoplay dotPosition="top">
                            {tracks.map(renderTrack)}
                        </Carousel>
                    </div>
                )}
            </main>
        </>
    );
}
