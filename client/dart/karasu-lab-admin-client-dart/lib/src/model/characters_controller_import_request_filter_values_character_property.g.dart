// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'characters_controller_import_request_filter_values_character_property.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$CharactersControllerImportRequestFilterValuesCharacterProperty
    extends CharactersControllerImportRequestFilterValuesCharacterProperty {
  @override
  final BuiltList<String>? values;
  @override
  final BuiltList<
          CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner>?
      valueTypes;
  @override
  final CharactersControllerImportRequestFilterValuesCharacterPropertyKey? key;

  factory _$CharactersControllerImportRequestFilterValuesCharacterProperty(
          [void Function(
                  CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder)?
              updates]) =>
      (new CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder()
            ..update(updates))
          ._build();

  _$CharactersControllerImportRequestFilterValuesCharacterProperty._(
      {this.values, this.valueTypes, this.key})
      : super._();

  @override
  CharactersControllerImportRequestFilterValuesCharacterProperty rebuild(
          void Function(
                  CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder)
              updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder
      toBuilder() =>
          new CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder()
            ..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other
            is CharactersControllerImportRequestFilterValuesCharacterProperty &&
        values == other.values &&
        valueTypes == other.valueTypes &&
        key == other.key;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, values.hashCode);
    _$hash = $jc(_$hash, valueTypes.hashCode);
    _$hash = $jc(_$hash, key.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(
            r'CharactersControllerImportRequestFilterValuesCharacterProperty')
          ..add('values', values)
          ..add('valueTypes', valueTypes)
          ..add('key', key))
        .toString();
  }
}

class CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder
    implements
        Builder<CharactersControllerImportRequestFilterValuesCharacterProperty,
            CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder> {
  _$CharactersControllerImportRequestFilterValuesCharacterProperty? _$v;

  ListBuilder<String>? _values;
  ListBuilder<String> get values =>
      _$this._values ??= new ListBuilder<String>();
  set values(ListBuilder<String>? values) => _$this._values = values;

  ListBuilder<
          CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner>?
      _valueTypes;
  ListBuilder<
          CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner>
      get valueTypes => _$this._valueTypes ??= new ListBuilder<
          CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner>();
  set valueTypes(
          ListBuilder<
                  CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner>?
              valueTypes) =>
      _$this._valueTypes = valueTypes;

  CharactersControllerImportRequestFilterValuesCharacterPropertyKeyBuilder?
      _key;
  CharactersControllerImportRequestFilterValuesCharacterPropertyKeyBuilder
      get key => _$this._key ??=
          new CharactersControllerImportRequestFilterValuesCharacterPropertyKeyBuilder();
  set key(
          CharactersControllerImportRequestFilterValuesCharacterPropertyKeyBuilder?
              key) =>
      _$this._key = key;

  CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder() {
    CharactersControllerImportRequestFilterValuesCharacterProperty._defaults(
        this);
  }

  CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder
      get _$this {
    final $v = _$v;
    if ($v != null) {
      _values = $v.values?.toBuilder();
      _valueTypes = $v.valueTypes?.toBuilder();
      _key = $v.key?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(
      CharactersControllerImportRequestFilterValuesCharacterProperty other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other
        as _$CharactersControllerImportRequestFilterValuesCharacterProperty;
  }

  @override
  void update(
      void Function(
              CharactersControllerImportRequestFilterValuesCharacterPropertyBuilder)?
          updates) {
    if (updates != null) updates(this);
  }

  @override
  CharactersControllerImportRequestFilterValuesCharacterProperty build() =>
      _build();

  _$CharactersControllerImportRequestFilterValuesCharacterProperty _build() {
    _$CharactersControllerImportRequestFilterValuesCharacterProperty _$result;
    try {
      _$result = _$v ??
          new _$CharactersControllerImportRequestFilterValuesCharacterProperty
              ._(
              values: _values?.build(),
              valueTypes: _valueTypes?.build(),
              key: _key?.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'values';
        _values?.build();
        _$failedField = 'valueTypes';
        _valueTypes?.build();
        _$failedField = 'key';
        _key?.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'CharactersControllerImportRequestFilterValuesCharacterProperty',
            _$failedField,
            e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
