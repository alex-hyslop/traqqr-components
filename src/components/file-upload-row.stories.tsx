import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileUploadRow } from './file-upload-row'

const meta = {
  title: 'components/FileUploadRow',
  component: FileUploadRow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: { fileName: 'report.pdf', fileSize: '1.2 MB' },
} satisfies Meta<typeof FileUploadRow>

export default meta
type Story = StoryObj<typeof meta>

export const AllStates: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-2">
      <FileUploadRow fileName="report.pdf" fileSize="1.2 MB" status="success" statusLabel="Uploaded" onRemove={() => {}} />
      <FileUploadRow fileName="dataset.csv" fileSize="8.4 MB" status="warning" statusLabel="Uploading" onRemove={() => {}} />
      <FileUploadRow fileName="broken-file.zip" fileSize="3.1 MB" status="error" statusLabel="Failed" onRemove={() => {}} />
    </div>
  ),
}
