import { render, screen } from '@testing-library/react';
import Async from './Async';
describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        // 예시 Data 만들기
        // fetch 는 우리가 만든 코드가 아니기 때문에 테스트 포함 X이므로 따로 Dummy data 를 만들어야함
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }],
        });
        render(<Async />);
        // find => 프로미스 반환
        // get 바로 screen 값 가져옴

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});
