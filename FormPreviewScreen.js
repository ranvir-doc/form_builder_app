method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, questions })
        });
        const result = await response.json();
        console.log('Form saved:', result);
    };

    return (
        <View className="p-4">
            <TextInput
                className="border p-2 mb-4"
                placeholder="Form Title"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Button title="Add Text Question" onPress={() => addQuestion('Text')} />
            <Button title="Add Grid Question" onPress={() => addQuestion('Grid')} />
            <Button title="Add CheckBox Question" onPress={() => addQuestion('CheckBox')} />
            <Button title="Save Form" onPress={saveForm} />
        </View>
    );
}
