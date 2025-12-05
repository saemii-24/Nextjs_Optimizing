import {useForm, Controller} from 'react-hook-form';
import type {ControllerRenderProps} from 'react-hook-form';

const formData = [
	{
		name: 'fruit',
		comp: 'radio',
		label: '좋아하는 과일',
		defaultValue: '',
		rules: {required: '과일을 선택해주세요.'},
		options: [
			{value: 'banana', label: '바나나'},
			{value: 'apple', label: '사과'},
		],
	},
	{
		name: 'agree',
		comp: 'checkbox',
		label: '약관에 동의합니다',
		defaultValue: false,
		rules: {required: '필수 동의 항목입니다.'},
	},
	{
		name: 'city',
		comp: 'select',
		label: '거주 도시',
		defaultValue: '',
		rules: {required: '도시를 선택해주세요.'},
		options: [
			{value: 'seoul', label: '서울'},
			{value: 'busan', label: '부산'},
		],
	},
];

type DefaultValues = {
	[key: string]: any;
};

const defaultValues = formData.reduce<DefaultValues>((acc, cur) => {
	acc[cur.name] = cur.defaultValue ?? '';
	return acc;
}, {});

export default function RenderFormPage() {
	const {control, handleSubmit} = useForm({
		defaultValues,
	});

	const onSubmit = (data: any) => console.log(data);

	return (
		<div className='w-screen h-screen flex flex-col items-center justify-center gap-10'>
			<h2 className='text-2xl font-bold'>렌더링 최적화 폼 페이지</h2>

			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
				{formData.map((field) => (
					<FormField key={field.name} field={field} control={control} />
				))}

				<button
					type='submit'
					className='px-4 py-2 bg-blue-500 text-white rounded'>
					제출하기
				</button>
			</form>
		</div>
	);
}

const FieldRegistry: any = {
	radio: RadioField,
	checkbox: CheckboxField,
	select: SelectField,
};

function FormField({field, control}: any) {
	const Component = FieldRegistry[field.comp];
	if (!Component) return null;

	return <Component field={field} control={control} />;
}

function RadioField({field, control}: any) {
	const {name, label, options, rules} = field;

	return (
		<div className='flex flex-col gap-2'>
			{label && <span className='font-semibold'>{label}</span>}

			{options?.map((opt: any) => (
				<Controller
					key={opt.value}
					name={name}
					control={control}
					rules={rules}
					render={({field}: {field: ControllerRenderProps<any, string>}) => (
						<label className='flex items-center gap-2 cursor-pointer'>
							<input
								type='radio'
								value={opt.value}
								checked={field.value === opt.value}
								onChange={() => field.onChange(opt.value)}
							/>
							{opt.label}
						</label>
					)}
				/>
			))}
		</div>
	);
}

function CheckboxField({field, control}: any) {
	const {name, label, rules} = field;

	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({field}: {field: ControllerRenderProps<any, string>}) => (
				<label className='flex items-center gap-2 cursor-pointer'>
					<input
						type='checkbox'
						checked={field.value}
						onChange={(e) => field.onChange(e.target.checked)}
					/>
					{label}
				</label>
			)}
		/>
	);
}

function SelectField({field, control}: any) {
	const {name, label, options, rules} = field;

	return (
		<div className='flex flex-col gap-1'>
			{label && <span className='font-semibold'>{label}</span>}

			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({field}: {field: ControllerRenderProps<any, string>}) => (
					<select
						value={field.value}
						onChange={field.onChange}
						className='border rounded px-3 py-2'>
						<option value=''>선택하세요</option>
						{options?.map((opt: any) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				)}
			/>
		</div>
	);
}
