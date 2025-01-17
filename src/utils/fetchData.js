export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`데이터 가져오기 실패: ${url}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // 필요 시 호출하는 쪽에서 처리하도록 에러 전달
    }
};
  