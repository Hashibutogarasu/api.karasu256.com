// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'artifact_sets.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ArtifactSets extends ArtifactSets {
  @override
  final String id;
  @override
  final String name;
  @override
  final String description;
  @override
  final String iconUrl;
  @override
  final String oneSetEffect;
  @override
  final String twoSetEffect;
  @override
  final String fourSetEffect;
  @override
  final DateTime createdAt;
  @override
  final DateTime updatedAt;
  @override
  final BuiltList<Artifacts>? artifacts;
  @override
  final BuiltList<GICharacter>? characters;
  @override
  final VersionsEntity version;

  factory _$ArtifactSets([void Function(ArtifactSetsBuilder)? updates]) =>
      (new ArtifactSetsBuilder()..update(updates))._build();

  _$ArtifactSets._(
      {required this.id,
      required this.name,
      required this.description,
      required this.iconUrl,
      required this.oneSetEffect,
      required this.twoSetEffect,
      required this.fourSetEffect,
      required this.createdAt,
      required this.updatedAt,
      this.artifacts,
      this.characters,
      required this.version})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(id, r'ArtifactSets', 'id');
    BuiltValueNullFieldError.checkNotNull(name, r'ArtifactSets', 'name');
    BuiltValueNullFieldError.checkNotNull(
        description, r'ArtifactSets', 'description');
    BuiltValueNullFieldError.checkNotNull(iconUrl, r'ArtifactSets', 'iconUrl');
    BuiltValueNullFieldError.checkNotNull(
        oneSetEffect, r'ArtifactSets', 'oneSetEffect');
    BuiltValueNullFieldError.checkNotNull(
        twoSetEffect, r'ArtifactSets', 'twoSetEffect');
    BuiltValueNullFieldError.checkNotNull(
        fourSetEffect, r'ArtifactSets', 'fourSetEffect');
    BuiltValueNullFieldError.checkNotNull(
        createdAt, r'ArtifactSets', 'createdAt');
    BuiltValueNullFieldError.checkNotNull(
        updatedAt, r'ArtifactSets', 'updatedAt');
    BuiltValueNullFieldError.checkNotNull(version, r'ArtifactSets', 'version');
  }

  @override
  ArtifactSets rebuild(void Function(ArtifactSetsBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  ArtifactSetsBuilder toBuilder() => new ArtifactSetsBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ArtifactSets &&
        id == other.id &&
        name == other.name &&
        description == other.description &&
        iconUrl == other.iconUrl &&
        oneSetEffect == other.oneSetEffect &&
        twoSetEffect == other.twoSetEffect &&
        fourSetEffect == other.fourSetEffect &&
        createdAt == other.createdAt &&
        updatedAt == other.updatedAt &&
        artifacts == other.artifacts &&
        characters == other.characters &&
        version == other.version;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, description.hashCode);
    _$hash = $jc(_$hash, iconUrl.hashCode);
    _$hash = $jc(_$hash, oneSetEffect.hashCode);
    _$hash = $jc(_$hash, twoSetEffect.hashCode);
    _$hash = $jc(_$hash, fourSetEffect.hashCode);
    _$hash = $jc(_$hash, createdAt.hashCode);
    _$hash = $jc(_$hash, updatedAt.hashCode);
    _$hash = $jc(_$hash, artifacts.hashCode);
    _$hash = $jc(_$hash, characters.hashCode);
    _$hash = $jc(_$hash, version.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'ArtifactSets')
          ..add('id', id)
          ..add('name', name)
          ..add('description', description)
          ..add('iconUrl', iconUrl)
          ..add('oneSetEffect', oneSetEffect)
          ..add('twoSetEffect', twoSetEffect)
          ..add('fourSetEffect', fourSetEffect)
          ..add('createdAt', createdAt)
          ..add('updatedAt', updatedAt)
          ..add('artifacts', artifacts)
          ..add('characters', characters)
          ..add('version', version))
        .toString();
  }
}

class ArtifactSetsBuilder
    implements Builder<ArtifactSets, ArtifactSetsBuilder> {
  _$ArtifactSets? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _description;
  String? get description => _$this._description;
  set description(String? description) => _$this._description = description;

  String? _iconUrl;
  String? get iconUrl => _$this._iconUrl;
  set iconUrl(String? iconUrl) => _$this._iconUrl = iconUrl;

  String? _oneSetEffect;
  String? get oneSetEffect => _$this._oneSetEffect;
  set oneSetEffect(String? oneSetEffect) => _$this._oneSetEffect = oneSetEffect;

  String? _twoSetEffect;
  String? get twoSetEffect => _$this._twoSetEffect;
  set twoSetEffect(String? twoSetEffect) => _$this._twoSetEffect = twoSetEffect;

  String? _fourSetEffect;
  String? get fourSetEffect => _$this._fourSetEffect;
  set fourSetEffect(String? fourSetEffect) =>
      _$this._fourSetEffect = fourSetEffect;

  DateTime? _createdAt;
  DateTime? get createdAt => _$this._createdAt;
  set createdAt(DateTime? createdAt) => _$this._createdAt = createdAt;

  DateTime? _updatedAt;
  DateTime? get updatedAt => _$this._updatedAt;
  set updatedAt(DateTime? updatedAt) => _$this._updatedAt = updatedAt;

  ListBuilder<Artifacts>? _artifacts;
  ListBuilder<Artifacts> get artifacts =>
      _$this._artifacts ??= new ListBuilder<Artifacts>();
  set artifacts(ListBuilder<Artifacts>? artifacts) =>
      _$this._artifacts = artifacts;

  ListBuilder<GICharacter>? _characters;
  ListBuilder<GICharacter> get characters =>
      _$this._characters ??= new ListBuilder<GICharacter>();
  set characters(ListBuilder<GICharacter>? characters) =>
      _$this._characters = characters;

  VersionsEntityBuilder? _version;
  VersionsEntityBuilder get version =>
      _$this._version ??= new VersionsEntityBuilder();
  set version(VersionsEntityBuilder? version) => _$this._version = version;

  ArtifactSetsBuilder() {
    ArtifactSets._defaults(this);
  }

  ArtifactSetsBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _description = $v.description;
      _iconUrl = $v.iconUrl;
      _oneSetEffect = $v.oneSetEffect;
      _twoSetEffect = $v.twoSetEffect;
      _fourSetEffect = $v.fourSetEffect;
      _createdAt = $v.createdAt;
      _updatedAt = $v.updatedAt;
      _artifacts = $v.artifacts?.toBuilder();
      _characters = $v.characters?.toBuilder();
      _version = $v.version.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(ArtifactSets other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$ArtifactSets;
  }

  @override
  void update(void Function(ArtifactSetsBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  ArtifactSets build() => _build();

  _$ArtifactSets _build() {
    _$ArtifactSets _$result;
    try {
      _$result = _$v ??
          new _$ArtifactSets._(
              id: BuiltValueNullFieldError.checkNotNull(
                  id, r'ArtifactSets', 'id'),
              name: BuiltValueNullFieldError.checkNotNull(
                  name, r'ArtifactSets', 'name'),
              description: BuiltValueNullFieldError.checkNotNull(
                  description, r'ArtifactSets', 'description'),
              iconUrl: BuiltValueNullFieldError.checkNotNull(
                  iconUrl, r'ArtifactSets', 'iconUrl'),
              oneSetEffect: BuiltValueNullFieldError.checkNotNull(
                  oneSetEffect, r'ArtifactSets', 'oneSetEffect'),
              twoSetEffect: BuiltValueNullFieldError.checkNotNull(
                  twoSetEffect, r'ArtifactSets', 'twoSetEffect'),
              fourSetEffect: BuiltValueNullFieldError.checkNotNull(
                  fourSetEffect, r'ArtifactSets', 'fourSetEffect'),
              createdAt: BuiltValueNullFieldError.checkNotNull(
                  createdAt, r'ArtifactSets', 'createdAt'),
              updatedAt: BuiltValueNullFieldError.checkNotNull(
                  updatedAt, r'ArtifactSets', 'updatedAt'),
              artifacts: _artifacts?.build(),
              characters: _characters?.build(),
              version: version.build());
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'artifacts';
        _artifacts?.build();
        _$failedField = 'characters';
        _characters?.build();
        _$failedField = 'version';
        version.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            r'ArtifactSets', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
