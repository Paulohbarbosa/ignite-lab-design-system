import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

function SvgComponent(props: LogoProps) {
    return (
        <svg
            width={209}
            height={238}
            viewBox="0 0 209 238"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M209 119.021c0-13.836-17.339-26.95-43.922-35.08 6.135-27.078 3.409-48.62-8.605-55.517-2.769-1.618-6.007-2.385-9.543-2.385v9.494c1.96 0 3.536.383 4.857 1.107 5.794 3.321 8.307 15.966 6.348 32.229-.469 4.002-1.236 8.217-2.173 12.517-8.35-2.044-17.466-3.62-27.052-4.64-5.751-7.877-11.715-15.03-17.722-21.288 13.888-12.9 26.924-19.967 35.785-19.967v-9.494c-11.715 0-27.051 8.344-42.558 22.82-15.507-14.39-30.843-22.65-42.559-22.65v9.494c8.819 0 21.897 7.025 35.785 19.84a201.092 201.092 0 00-17.594 21.244c-9.628 1.022-18.744 2.597-27.094 4.683a128.369 128.369 0 01-2.215-12.346c-2.003-16.263.468-28.908 6.22-32.271 1.277-.767 2.939-1.107 4.898-1.107V26.21c-3.578 0-6.816.766-9.627 2.384C40.258 35.49 37.574 56.99 43.75 83.983 17.253 92.157 0 105.227 0 119.02c0 13.837 17.339 26.95 43.922 35.081-6.135 27.078-3.408 48.62 8.605 55.517 2.769 1.618 6.007 2.384 9.585 2.384 11.715 0 27.052-8.344 42.558-22.82 15.507 14.391 30.843 22.65 42.559 22.65 3.578 0 6.816-.766 9.628-2.384 11.97-6.897 14.654-28.397 8.477-55.389C191.747 145.928 209 132.815 209 119.021zm-55.466-28.397c-1.577 5.492-3.536 11.155-5.751 16.817-1.747-3.406-3.579-6.812-5.581-10.218-1.96-3.406-4.047-6.726-6.135-9.962 6.05.894 11.886 2.001 17.467 3.363zm-19.512 45.342c-3.322 5.747-6.731 11.197-10.266 16.263a221.61 221.61 0 01-19.256.852c-6.433 0-12.865-.298-19.17-.809a235.017 235.017 0 01-10.31-16.178 221.863 221.863 0 01-8.86-16.945c2.64-5.705 5.623-11.41 8.818-16.987 3.323-5.748 6.73-11.197 10.266-16.263 6.348-.554 12.78-.852 19.256-.852 6.433 0 12.865.298 19.17.809a234.719 234.719 0 0110.31 16.178 221.962 221.962 0 018.861 16.945 238.355 238.355 0 01-8.819 16.987zm13.761-5.535c2.3 5.705 4.26 11.41 5.878 16.945a191.343 191.343 0 01-17.551 3.406c2.087-3.279 4.175-6.642 6.134-10.09 1.96-3.406 3.792-6.855 5.539-10.261zm-43.198 45.427c-3.962-4.087-7.924-8.643-11.843-13.624 3.834.17 7.754.298 11.715.298 4.005 0 7.967-.085 11.843-.298a166.066 166.066 0 01-11.715 13.624zM72.89 150.782c-6.05-.894-11.886-2.001-17.466-3.364 1.576-5.492 3.536-11.154 5.75-16.817 1.748 3.406 3.58 6.812 5.582 10.218a282.394 282.394 0 006.134 9.963zm31.482-88.597c3.962 4.087 7.924 8.642 11.843 13.623-3.834-.17-7.753-.298-11.715-.298-4.004 0-7.966.086-11.843.298a166.237 166.237 0 0111.715-13.623zM72.847 87.26c-2.087 3.278-4.174 6.642-6.134 10.09a240.467 240.467 0 00-5.538 10.218c-2.3-5.705-4.26-11.41-5.879-16.945 5.58-1.32 11.46-2.469 17.551-3.363zm-38.553 53.303c-15.081-6.429-24.837-14.859-24.837-21.543 0-6.684 9.756-15.156 24.837-21.542 3.663-1.576 7.668-2.98 11.8-4.3 2.428 8.344 5.623 17.029 9.585 25.927-3.919 8.856-7.071 17.498-9.457 25.8-4.218-1.319-8.222-2.767-11.928-4.342zm22.919 60.838c-5.794-3.321-8.307-15.965-6.348-32.228.47-4.002 1.236-8.217 2.173-12.517 8.35 2.043 17.466 3.619 27.052 4.64 5.75 7.877 11.715 15.029 17.722 21.287-13.888 12.9-26.924 19.968-35.785 19.968-1.917-.043-3.536-.426-4.814-1.15zm101.049-32.441c2.003 16.263-.468 28.908-6.219 32.271-1.278.766-2.94 1.107-4.9 1.107-8.818 0-21.896-7.025-35.784-19.84a201.11 201.11 0 0017.594-21.244c9.628-1.022 18.744-2.597 27.094-4.683.98 4.3 1.747 8.429 2.215 12.389zm16.402-28.397c-3.664 1.575-7.668 2.98-11.801 4.3-2.428-8.345-5.623-17.03-9.585-25.928 3.919-8.855 7.072-17.498 9.457-25.8 4.218 1.32 8.222 2.767 11.971 4.343 15.081 6.428 24.837 14.858 24.837 21.542-.043 6.684-9.799 15.157-24.879 21.543z"
                fill="#81D8F7"
            />
            <path
                d="M104.457 138.478c10.753 0 19.469-8.711 19.469-19.457 0-10.745-8.716-19.456-19.469-19.456-10.752 0-19.468 8.711-19.468 19.456 0 10.746 8.716 19.457 19.468 19.457z"
                fill="#81D8F7"
            />
        </svg>
    )
}

export default SvgComponent